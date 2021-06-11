import React from 'react';
import styles from "./ImportantFriends.module.css";
import ImportantFriendItem from "./ImportantFriendsItem/ImportantFriendItem";

const ImportantFriends = (props) => {

    let importantFriends = props.importantFriends.map((el) => <ImportantFriendItem importantFriend={el}/>);

    return (
        <section className={styles.importantFriendsBlock}>
            <div className='section-title'>Важные</div>
            <div className={styles.importantFriends}>
                {importantFriends}
            </div>
        </section>
    )
};

export default ImportantFriends;