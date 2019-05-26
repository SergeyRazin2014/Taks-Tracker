import { FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, FETCH_TASKS_LOADING, FETCH_TASK_SUCCESS, FETCH_TASK_FAILURE } from '../actions/types';

const initialState = {
    tasks: null,
    tasksLoading: false,
    task: null
}

const taskReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case FETCH_TASKS_SUCCESS:
            return { ...state, tasks: payload, tasksLoading: false };
        case FETCH_TASKS_FAILURE:
            return { ...state, tasks: null, tasksLoading: false };
        case FETCH_TASKS_LOADING:
            return { ...state, tasks: null, tasksLoading: true }

        case FETCH_TASK_SUCCESS:
            return { ...state, task: payload }
        case FETCH_TASK_FAILURE:
            return { ...state, task: null }
        default:
            return state;
    }
}

export default taskReducer;