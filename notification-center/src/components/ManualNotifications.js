import React, { useState, useEffect } from 'react'
import * as HubService from './HubService'
import NotificationInput from './NotificationInput'

const manualNotificationContainerStyle = {
    margin: '3rem',
    padding: '1rem',
    border: '1px solid lightgrey',
    width: '14rem',
    borderRadius: '5px',
    
}

const ManualNotifications = () => {
    const [connection, setConnection] = useState(null)

    useEffect(() => {
        setConnection(HubService.getHubConnection())
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
        }
    }, [connection])

    const sendNotification = async (title, message, link) => {
        const notification = {
            title: title,
            message: message,
            link: link
        }

        console.log(notification)
        if (connection.connectionStarted) {
            try {
                await connection.send('SendNotification', notification);
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }

    return (
        <div style={manualNotificationContainerStyle}>
            <NotificationInput sendNotification={sendNotification} />
        </div>
    )
}

export default ManualNotifications