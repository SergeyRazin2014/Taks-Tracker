import { AUTH_USER_SUCCESS, AUTH_USER_FAILURE, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, LOGOUT } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuth: null,
    user: null
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case AUTH_USER_SUCCESS:
            return { ...state, token: payload, isAuth: true }
        case AUTH_USER_FAILURE:
            return { ...state, token: null, isAuth: false }
        case FETCH_USER_SUCCESS:
            return { ...state, user: payload, isAuth: true }
        case FETCH_USER_FAILURE:
        case LOGOUT:
            return { ...state, token: null, user: null, isAuth: false }
        default:
            return state;
    }
}

export default authReducer;