import React from 'react';
import styles from './DialogsNav.module.css';
import DialogCard from "./DialogCard/DialogCard";

const DialogsNav = (props) => {

    let dialogsElements = props.dialogs.map(el => <DialogCard dialogInfo={el}/>);

    return(
        <div className={styles.dialogsNav}>
            <div className="section-title">Диалоги</div>
            {dialogsElements}
            {dialogsElements}
            {dialogsElements}
            {dialogsElements}
            {dialogsElements}
            {dialogsElements}
            {dialogsElements}
            {dialogsElements}
            {dialogsElements}
        </div>
    )
};

export default DialogsNav;