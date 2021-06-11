import {createSelector} from "reselect";

const getUsers = (state) => (
    state.usersPage.users
);

export const getUsersFromState = createSelector(getUsers, (users) => {
    return users.filter(user => true)
});

export const getIsFetching = (state) => (
    state.usersPage.isFetching
);