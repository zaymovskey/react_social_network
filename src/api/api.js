import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/'
});

const getAuthTokenHeaders = () => {
    if (localStorage.token) {
        return {headers: {'Authorization': `Token ${localStorage.token}`}}
    }
    return null
};


export const usersAPI = {
    getUsers() {
        return instance.get(`users/all`,).then(response => (response.data))
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`users/${userId}`)
    },
    updateProfileStatus(status) {
        return instance.patch(`users/update/`, {status: status}, getAuthTokenHeaders())
    },
    getPosts(userId) {
        return instance.get(`posts/${userId}/`, getAuthTokenHeaders())
    },
    createPost(text, authorId) {
        return instance.post('posts/create/', {text: text, author: authorId}, getAuthTokenHeaders())
    },
    deletePost(postId) {
        return instance.delete(`posts/delete/${postId}`, getAuthTokenHeaders())
    },
    like(postId) {
        return instance.post(`posts/like/${postId}/`, {}, getAuthTokenHeaders())
    }
};

export const authAPI = {
    login (username, password) {
        return instance.post('auth/token/login', {username: username, password: password})
    },

    me () {
        return instance.get('auth/users/me', getAuthTokenHeaders())
    },

    logout () {
        return instance.post('auth/token/logout/', {}, getAuthTokenHeaders())
    }
};