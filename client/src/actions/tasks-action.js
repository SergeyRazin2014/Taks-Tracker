import { FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, FETCH_TASKS_LOADING, FETCH_TASK_SUCCESS, FETCH_TASK_FAILURE } from './types';
import TaskService from '../services/task-service';

const fetchTasksSuccess = (tasks) => {
    return {
        type: FETCH_TASKS_SUCCESS,
        payload: tasks
    }
}

const fetchTasksFailure = () => {
    return {
        type: FETCH_TASKS_FAILURE
    }
}

const fethcTasksLoading = () => {
    return {
        type: FETCH_TASKS_LOADING
    }
}

const fetchTasksAction = () => async (dispatch) => {
    try {
        dispatch(fethcTasksLoading());
        var tasks = await new TaskService().getTasksForUser();
        return dispatch(fetchTasksSuccess(tasks));
    } catch (err) {
        console.log(err);
        dispatch(fetchTasksFailure());
        //todo: alert errors
    }
}

const fetchTaskSuccess = (task) => {
    return {
        type: FETCH_TASK_SUCCESS,
        payload: task
    }
}

const fetchTaskFailure = () => {
    return {
        type: FETCH_TASK_FAILURE
    }
}

const fetchTaskByIdAction = (taskId) => async (dispatch) => {
    try {
        var task = await new TaskService().getTaskById(taskId);
        dispatch(fetchTaskSuccess(task))
    } catch (err) {
        console.log(err);
        dispatch(fetchTaskFailure())
    }
}

export {
    fetchTasksAction,
    fetchTaskByIdAction
}