
import React, { useState, useEffect, useRef } from 'react'
import NotificationWindow from './NotificationWindow'
import * as HubService from './HubService'

const NotificationCenter = () => {
    const [connection, setConnection] = useState(null);
    const [notifications, setNotifications] = useState([]);
    const latestNotifications = useRef(null);

    latestNotifications.current = notifications;

    useEffect(() => {
        setConnection(HubService.getHubConnection());
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(() => {
                    console.log('[Hub: Connected]')
                    connection.on('RecieveNotification', notification => {
                        const updatedNotifications = [...latestNotifications.current];
                        updatedNotifications.push(notification);

                        setNotifications(updatedNotifications);
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

    return (
        <div>
            {console.log(notifications)}
            <NotificationWindow notifications={notifications} />
        </div>
    );
};

export default NotificationCenter