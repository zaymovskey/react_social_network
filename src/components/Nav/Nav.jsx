import styles from './Nav.module.css'
import React from 'react';
import { NavLink } from "react-router-dom";
import ImportantFriendsContainer from "./ImportantFriends/ImportantFriendsContainer";

const Nav = (props) => {
    return (
        <nav className={styles.nav}>
            <NavLink to="/profile" className={styles.item}>Профиль</NavLink>
            <NavLink to="/dialogs" className={styles.item}>Сообщения</NavLink>
            <a href="#" className={styles.item}>Новости</a>
            <a href="#" className={styles.item}>Друзья</a>
            <a href="#" className={styles.item}>Музыка</a>
            <a href="#" className={styles.item}>Настройки</a>
            <NavLink to="/users" className={styles.item}>Пользователи</NavLink>
            <ImportantFriendsContainer store={props.store}/>
        </nav>
    )
};

export default  Nav