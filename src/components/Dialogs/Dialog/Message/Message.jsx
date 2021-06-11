import React from 'react';
import styles from './Message.module.css'

const Message = (props) => {
    return(
        <div className={styles.message}>
            <a className="messageAuthor">{props.message.author}</a>
            <div className="messageBody">{props.message.messageText}</div>
        </div>
    )
};

export default Message;