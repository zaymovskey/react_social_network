import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_POST_BODY = 'UPDATE_POST_BODY';
const UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS';
const SET_POSTS = 'SET_POSTS';
const REMOVE_POST = 'REMOVE_POST';
const LIKE_UNLIKE = 'LIKE_UNLIKE';
const TOGGLE_IS_LIKE_PROGRESS = 'TOGGLE_IS_LIKE_PROGRESS';

let initialState = {
    profile: null,
    posts: [],
    postBody: '',
    likeInProgress: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, {...action.postData}], postBody: ''};

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        case UPDATE_POST_BODY:
            return {...state, postBody: action.body};

        case UPDATE_PROFILE_STATUS:
            const copy = {...state};
            copy.profile.status = action.status;
            return copy;

        case SET_POSTS:
            return {...state, posts: action.posts};

        case REMOVE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)};

        case LIKE_UNLIKE:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postId) {
                        if (action.action) {
                            post.liked = true;
                            post.total_likes += 1;
                            return post
                        }
                        post.liked = false;
                        post.total_likes -= 1;
                        return post
                    }
                    return post
                })
            };

        case TOGGLE_IS_LIKE_PROGRESS:
            return {...state, likeInProgress: action.isFetching};

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
export const likeUnlike = (postId, action) => ({type: LIKE_UNLIKE, action: action, postId: postId});
export const toggleLikeProgress = (isFetching) => ({type: TOGGLE_IS_LIKE_PROGRESS, isFetching: isFetching});

// Thunk Creators
export const getProfile = (userId) => (dispatch => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
});

export const getProfilePosts = (userId) => (dispatch => {
    profileAPI.getPosts(userId).then(response => {
        dispatch(setPosts(response.data))
    })
});

export const updateProfileStatus = (status) => (dispatch => {
    profileAPI.updateProfileStatus(status).then(response => {
        dispatch(updateStatus(response.data.status))
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

export const like = (postId) => (dispatch => {
    dispatch(toggleLikeProgress(true));
    profileAPI.like(postId).then(response => {
        dispatch(likeUnlike(postId, response.data));
        dispatch(toggleLikeProgress(false));
    })
});


export default profileReducer