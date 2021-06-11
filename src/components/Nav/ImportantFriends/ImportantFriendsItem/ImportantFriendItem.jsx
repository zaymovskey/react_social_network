import React from 'react';
import styles from "./ImportantFriendItem.module.css";

let ImportantFriendItem = (props) => {
    return (
        <a href='#' className={styles.importantFriend}>
            <img src={props.importantFriend.imgUrl} alt=""/>
            <div>{props.importantFriend.name}</div>
        </a>
    )
};

export default ImportantFriendItem;