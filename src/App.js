import React, {Component} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Register from "./LoginRegister/Register/Register";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import LoginContainer from "./LoginRegister/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Loader from "./components/common/Loader/Loader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer store={this.props.store}/>
                <Nav store={this.props.store}/>
                <div className='content'>
                    <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer store={this.props.store}/>}/>
                    <Route path='/users' render={() => <UsersContainer store={this.props.store}/>}/>
                    <Route path='/login' render={() => <LoginContainer store={this.props.store}/>}/>
                    <Route path='/register' render={() => <Register store={this.props.store}/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);
