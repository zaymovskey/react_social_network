import React from "react";
import Search from "../Dialogs/Search/Search";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    return (
        <div className='usersWrapper'>
            <Search/>
            <section>
                <div className="usersWrapper">
                    {
                        props.users.map(user =>
                            <div className={styles.item} key={user.id}>
                                <div className={styles.image}>
                                    <img src={user.avatar ? user.avatar : 'https://www.computerhope.com/jargon/g/guest-user.jpg'} alt=""/>
                                </div>
                                <div className={styles.info}>
                                    <NavLink to={'/profile/' + user.id}>
                                        {user.username}
                                    </NavLink>
                                    <div className={styles.location}>Узбекистан</div>
                                </div>
                                <div className={styles.toggleFollow}>
                                    <button>{'Подписаться'}</button>
                                </div>
                            </div>)
                    }
                </div>
                <div className={styles.paginationWrapper}>
                </div>
            </section>

        </div>
    )
};

export default Users