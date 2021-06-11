import styles from "./DialogCard.module.css";
import { NavLink } from "react-router-dom";
import React from 'react'

const DialogCard = (props) => {
    return(
        <NavLink key={props.dialogInfo.id} to={'/dialogs/' + props.dialogInfo.id} className={styles.dialogCard}>
            <div>
                <img src={props.dialogInfo.imgUrl} alt=""/>
            </div>
            <div>
                <div>{props.dialogInfo.firstName} {props.dialogInfo.lastName}</div>
                <div className={styles.message}>{props.dialogInfo.lastMessage}</div>
            </div>
        </NavLink>
    )
};

export default DialogCard;