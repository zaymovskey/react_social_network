import {usersAPI} from "../api/api";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user
                })
            };

        case SET_USERS:
            return {...state, users: [...action.users]};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        default:
            return state;
    }
};
// Action Creators
export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId: userId});
export const setUsers= (users) => ({type: SET_USERS, users: users});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});

// Thunks Creators
export const getUsers = () => ((dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers().then(response => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response));
    });
});


export default usersReducer;