import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import taskReducer from './task-reducer';
import alertReducer from './alert-reducer';

const rootReducer = combineReducers({
    authReducer,
    taskReducer,
    alertReducer
});

export default rootReducer;