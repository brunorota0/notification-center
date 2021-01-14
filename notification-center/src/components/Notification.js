import React, { useState } from 'react';
import * as Utils from './Utils'

const notificationStyle = {
    background: 'white',
    borderRadius: '5px',
    padding: '1rem',
    marginBottom: '1rem'
}

const Notification = (props) => {
    const [dateTime, setDateTime] = useState(Utils.fromNowFormatDate(props.dateTime))

    setInterval(() => {setDateTime(Utils.fromNowFormatDate(props.dateTime))}, 30000)

    return (
        <div style={notificationStyle}>
            <p><strong>{props.title}</strong></p>
            <p>{props.message}</p>
            <a href={props.link}>{props.link}</a>
            <p style={{ color: 'darkgrey', fontSize: '.8rem' }}>{dateTime}</p>
        </div>
    )
}

export default Notification;