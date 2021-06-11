import React from "react";
import Users from "./Users";
import Loader from "../common/Loader/Loader";
import {connect} from "react-redux";
import {
    getUsers,
    setUsers,
    toggleFollow,
    toggleIsFetching
} from "../../redux/usersReducer";
import {getIsFetching, getUsersFromState} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <>
                {this.props.isFetching? <Loader/>: <Users
                    users={this.props.users}
                    toggleFollow={this.props.toggleFollow}
                />}
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsersFromState(state),
        isFetching: getIsFetching(state)
    }
};

export default connect(mapStateToProps,
    {
        toggleFollow,
        setUsers,
        toggleIsFetching,
        getUsers
    })(UsersContainer);