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
    let postsElements = props.posts.map(el => <Post likeInProgress={props.likeInProgress}
                                                    like={props.like}
                                                    authId={props.authId}
                                                    deletePost={props.deletePost}
                                                    profile={props.profile}
                                                    post={el}/>);

    return (
        <div className='profileWrapper'>
            <ProfileInfo profile={props.profile} updateProfileStatus={props.updateProfileStatus}/>
            <CreatePost
                posts={props.posts}
                postBody={props.postBody}
                createPost={props.createPost}
                updatePostBody={props.updatePostBody}
                authId={props.authId}
                profile={props.profile}/>

            {postsElements.reverse()}
        </div>
    )
};

export default Profile