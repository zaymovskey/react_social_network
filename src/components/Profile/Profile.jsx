import React from 'react';
import Post from "./Post/Post";
import ProfileInfo from './ProfileInfo/ProfileInfo'
import CreatePost from "./CreatePost/CreatePost";
import Loader from "../common/Loader/Loader";

const Profile = (props) => {
    if (!props.profile) {
        return (
            <Loader/>
        )
    }

    let postElements = props.posts.map(post => <Post likeInProgress={props.likeInProgress}
                                                    like={props.like}
                                                    authId={props.authId}
                                                    deletePost={props.deletePost}
                                                    profile={props.profile}
                                                    post={post}/>);

    return (
        <div className='profileWrapper'>
            <ProfileInfo isOwner={props.isOwner} authId={props.authId} profile={props.profile} updateProfileStatus={props.updateProfileStatus}/>
            {props.isOwner? <CreatePost
                posts={props.posts}
                postBody={props.postBody}
                createPost={props.createPost}
                updatePostBody={props.updatePostBody}
                authId={props.authId}
                profile={props.profile}/> : null}


            {postElements.reverse()}
        </div>
    )
};

export default Profile