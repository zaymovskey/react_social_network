import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';


let initialState = {
    id: null,
    email: null,
    username: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                id: action.id,
                email: action.email,
                username: action.username,
                isAuth: action.isAuth
            };

        default:
            return state
    }
};

// Action Creators
export const setAuthUserData = (id, username, email, isAuth) => (
    {
        type: SET_AUTH_USER_DATA,
        id: id,
        username: username,
        email: email,
        isAuth: isAuth
    });

// Thunk Creators
export const register = (username, password, phone, email) => (dispatch => {
    authAPI.register(username, password, phone, email).then(response => {
        debugger;
    }).catch(error => {
        console.log(error.response)
    })
});

export const login = (username, password) => (dispatch => {
    authAPI.login(username, password).then(response => {
            if (response.status === 200) {
                localStorage.setItem('token', response.data.auth_token);
                dispatch(getAuthUserData())
            }
        },
    )
});

export const logout = () => (dispatch => {
    authAPI.logout().then(response => {
        if (response.status === 204) {
            localStorage.clear();
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
});

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then(response => {
        if (response.status === 200) {
            let {id, username, email} = response.data;
            dispatch(setAuthUserData(id, username, email, true))
        }
    }).catch(error => {
        if (error.response.status === 401) {
            console.log(error.response)
        }
    })
};



export default authReducer;