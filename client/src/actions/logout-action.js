import { LOGOUT } from './types';

const logoutAction = () => (dispatch) => {

    localStorage.removeItem('token');

    dispatch({
        type: LOGOUT
    })
}

export default logoutAction;