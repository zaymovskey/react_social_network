import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    deletePost,
    createPost,
    getProfile,
    updatePostBody,
    updateProfileStatus,
    getProfilePosts,
    like
} from "../../redux/profileReducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId);
        this.props.getProfilePosts(userId);
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        postBody: state.profilePage.postBody,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        authId: state.auth.id
    }
};


export default compose(
    connect(mapStateToProps, {
        updatePostBody,
        getProfile,
        updateProfileStatus,
        getProfilePosts,
        createPost,
        deletePost,
        like
    }),
    withRouter
)(ProfileContainer)