import { SET_ALERT } from '../actions/types';

const initialState = { alerts: [] };

const alertReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            let alerts = [payload];
            return { ...state, alerts }
        default:
            return state;

    }
}

export default alertReducer;

