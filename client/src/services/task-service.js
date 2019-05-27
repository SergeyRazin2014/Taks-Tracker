import axios from 'axios';

class TaskService {

    async getTasksForUser() {
        let res = await axios.get('/tasks');
        return res.data;
    }

    async getTaskById(taskId){
        let res = await axios.get(`/task/${taskId}`);
        return res.data;
    }

}

export default TaskService;