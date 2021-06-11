import React from 'react';
import Search from "./Search/Search";
import styles from './Dialogs.module.css'
import DialogsNav from "./DialogsNav/DialogsNav";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
    return(
        <div className={styles.dialogsWrapper}>
            <Search/>
            <section>
                <div className={styles.dialogsWrap}>
                    <DialogsNav dialogs={props.dialogsInfo.dialogs}/>
                    <Dialog
                        messages={props.dialogsInfo.messages}
                        messageBody={props.dialogsInfo.messageBody}
                        sendMessage={props.sendMessage}
                        updateMessageBody={props.updateMessageBody}
                    />
                </div>
            </section>
        </div>
    )
};

export default Dialogs;