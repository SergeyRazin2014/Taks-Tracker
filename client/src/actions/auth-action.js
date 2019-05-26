import { AUTH_USER_SUCCESS, AUTH_USER_FAILURE, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, SET_ALERT } from './types';
import UserService from '../services/user-service';
import setAuthToken from '../utils/set-auth-token';
import { setAlert } from './alert-actions';

const authUserSuccess = (payload) => {
    return {
        type: AUTH_USER_SUCCESS,
        token: payload
    }
}

const authUserFailure = () => {
    return {
        type: AUTH_USER_FAILURE
    }
}

const authAction = (email, password) => async (dispatch) => {

    debugger;

    try {
        let token = await new UserService().getToken(email, password);

        localStorage.setItem('token', token);
        setAuthToken(token);
        dispatch(authUserSuccess(token));
        dispatch(fetchUser());
    } catch (err) {
        console.log(err);
        debugger;
        dispatch(setAlert(err.response.data.errors[0].msg));
    }

}

const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}

const fetchUserFailure = () => {
    return {
        type: FETCH_USER_FAILURE
    }
}

const fetchUser = () => async (dispatch) => {

    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const user = await new UserService().getUser();

        if (user) {
            dispatch(fetchUserSuccess(user));
        } else {
            localStorage.removeItem('token');
            dispatch(fetchUserFailure());
        }
    } catch (err) {
        localStorage.removeItem('token');
        dispatch(fetchUserFailure());
    }
}

export {
    authAction,
    fetchUser
};