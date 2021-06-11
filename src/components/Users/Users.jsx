import React from "react";
import Search from "../Dialogs/Search/Search";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

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
                                    <button onClick={() => {
                                        // if (user.followed) {
                                        //     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        //         withCredentials: true,
                                        //         headers: {
                                        //             'API-KEY' : '118863e8-61e5-48b6-851c-86e6ac2f6e57'
                                        //         }
                                        //
                                        //     }).then(response => {
                                        //         if (response.data.resultCode === 0) {
                                        //             props.toggleFollow(user.id)
                                        //         }
                                        //     });
                                        // }
                                        // else {
                                        //     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, null, {
                                        //         withCredentials: true,
                                        //         headers: {
                                        //             'API-KEY' : '118863e8-61e5-48b6-851c-86e6ac2f6e57'
                                        //         }
                                        //     }).then(response => {
                                        //         if (response.data.resultCode === 0) {
                                        //             props.toggleFollow(user.id)
                                        //         }
                                        //     });
                                        // }
                                    }
                                    }>{'Подписаться'}</button>
                                </div>
                            </div>)
                    }
                </div>
                <div className={styles.paginationWrapper}>
                    {pages.map(page => (
                        <button onClick={() => {props.setCurrentPage(page)}} className={props.currentPage === page ? styles.paginationItemActive : styles.paginationItem}>{page}</button>
                    ))}
                </div>
            </section>

        </div>
    )
};

export default Users