import {getAuthUserData} from "./authReducer";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };

        default:
            return state
    }
};

export const initializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess())
    })
};

export default appReducer