import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_POST_BODY = 'UPDATE_POST_BODY';
const UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS';
const SET_POSTS = 'SET_POSTS';
const REMOVE_POST = 'REMOVE_POST';

let initialState = {
    profile: null,
    posts: [],
    postBody: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,
                    {
                        id: action.postData.id,
                        text: action.postData.text,
                        created_date: action.postData.created_date
                    }],
                postBody: ''
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case UPDATE_POST_BODY:
            return {
                ...state,
                postBody: action.body,
            };

        case UPDATE_PROFILE_STATUS:
            const copy = {...state};
            copy.profile.status = action.status;
            return copy;

        case SET_POSTS:
            return {
                ...state,
                posts: action.posts
            };

        case REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            };

        default:
            return state
    }
};

// Action Creators
export const addPost = (data) => ({type: ADD_POST, postData: data});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const updatePostBody = (body) => ({type: UPDATE_POST_BODY, body: body});
export const updateStatus = (status) => ({type: UPDATE_PROFILE_STATUS, status: status});
export const setPosts = (posts) => ({type: SET_POSTS, posts: posts});
export const removePost = (postId) => ({type: REMOVE_POST, postId: postId});

// Thunk Creators
export const getProfile = (userId) => (dispatch => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
});

export const updateProfileStatus = (status) => (dispatch => {
    profileAPI.updateProfileStatus(status).then(response => {
        dispatch(updateStatus(response.data.status))
    })
});

export const getProfilePosts = (userId) => (dispatch => {
    profileAPI.getPosts(userId).then(response => {
        dispatch(setPosts(response.data))
    })
});

export const createPost = (text, authorId) => (dispatch => {
    profileAPI.createPost(text, authorId).then(response => {
        dispatch(addPost(response.data))
    })
});

export const deletePost = (postId) => (dispatch => {
    profileAPI.deletePost(postId).then(response => {
        dispatch(removePost(postId))
    }).catch(error => {
        console.log(error)
    })
});


export default profileReducer