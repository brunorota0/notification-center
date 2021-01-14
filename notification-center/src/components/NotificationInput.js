import React, { useState } from 'react'

const NotificationInput = (props) => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('')
    const [link, setLink] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        const isTitleProvided = title && title !== '';
        const isMessageProvided = message && message !== '';

        if (isTitleProvided && isMessageProvided) {
            props.sendNotification(title, message, link);
        }
        else {
            alert('Please insert at least a title and a message.');
        }
    }

    return (
        <form
            onSubmit={onSubmit}>
            <h3>Create New Notification</h3>
            <label htmlFor="title">Title</label>
            <br />
            <input
                id="title"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <br />
            <br />
            <label htmlFor="message">Message</label>
            <br />
            <input
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)} />
            <br />
            <br />
            <label htmlFor="link">Link</label>
            <br />
            <input
                type="text"
                id="link"
                name="link"
                value={link}
                onChange={e => setLink(e.target.value)} />
            <br /><br />
            <button>Send Notification</button>
        </form>
    )
}

export default NotificationInput