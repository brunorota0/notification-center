import React from 'react';

import Notification from './Notification';

const notificationContainerStyle = {
    width: '32rem',
    margin: '3rem',
    border: '1px solid darkgray',
    borderRadius: '5px',
    padding: '1rem',
    backgroundColor: 'lightgrey'
}

const NotificationWindow = (props) => {
    const notifications = props.notifications
        .map(n => <Notification
            key={`notification-${n.dateTime}`}
            title={n.title}
            message={n.message}
            link={n.link}
            datetime={n.dateTime} />)

    return (
        <div style={notificationContainerStyle}>
            <h2 style={{ textAlign: 'center' }}>{`Notifications (${notifications.length})`}</h2>
            <hr />
            <br />
            {notifications.length > 0 ?
                notifications
                : <p style={{ textAlign: 'center' }}>There aren't notifications</p>
            }
        </div>
    )
};

export default NotificationWindow