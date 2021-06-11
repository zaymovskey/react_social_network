import React from 'react';
import styles from "./Dialog.module.css";
import Message from "./Message/Message";

const Dialog = (props) => {

    let messagesElements = props.messages.map((el) => (<Message message={el}/>));

    let onSendMessageClick = () => {
        props.sendMessage()
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateMessageBody(body)
    };

    return(
        <div className={styles.dialogWrap}>
            <div className={styles.dialog}>
                {messagesElements}
            </div>
            <div className={styles.addMessageWrap}>
                <textarea onChange={onNewMessageChange} value={props.messageBody} placeholder='Напишите сообщение...'/>
                <button onClick={onSendMessageClick} type='submit'>Отправить</button>
            </div>
        </div>
    )
};

export default Dialog