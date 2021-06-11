import styles from './Header.module.css';
import React from 'react';
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    state = {
        isLogoutHover: false
    };

    showLogout = () => {
        this.setState({isLogoutHover: true})
    };
    closeLogout = () => {
        this.setState({isLogoutHover: false})
    };

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.loginBlock}>
                    {this.props.isAuth ?
                        <div onMouseLeave={this.closeLogout} onMouseEnter={this.showLogout}>
                            {!this.state.isLogoutHover?
                               <NavLink to={'/login'}>{this.props.username}</NavLink> : <a onClick={this.props.logout} href="#">Выход</a> }
                        </div>
                        : <NavLink to={'/login'}>Войти</NavLink>}
                </div>
            </header>
        )
    }
}

export default Header;