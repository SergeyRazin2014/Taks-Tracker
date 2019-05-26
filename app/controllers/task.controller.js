const Task = require('../models/Task');


const ob = {

    //@get task
    get: async (req, res) => {
        try {
            let taskId = req.params.id;
            const task = await Task.findById(taskId);
            return res.json(task);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    },

    //@add task
    post: async (req, res) => {

        try {
            const { title, status, priority, deadline, timePlan, timeFact, description } = req.body;

            let newTask = new Task({
                title,
                status,
                priority,
                deadline,
                timePlan,
                timeFact,
                description,
                user: req.user.id
            });

            const task = await newTask.save();

            res.json(task);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }

    },

    getTasksForUser: async (req, res) => {

        try {
            const tasks = await Task.find({ user: req.user.id })
            return res.json(tasks)
        } catch (err) {
            console.error(err.message);
            res.status(500).send("server error");
        }
    }
}

module.exports = ob;