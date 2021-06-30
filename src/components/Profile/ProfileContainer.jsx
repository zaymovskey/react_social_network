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
    refreshProfile() {
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

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        postBody: state.profilePage.postBody,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        authId: state.auth.id,
        likeInProgress: state.profilePage.likeInProgress,
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