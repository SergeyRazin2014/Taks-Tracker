const express = require('express');
const router = express.Router();

const auth = require('./middleware/auth');
const userController = require('./controllers/user.controller');
const taskController = require('./controllers/task.controller');
const authController = require('./controllers/auth.controller');

module.exports = router;

router.post('/auth', authController.auth);

router.get('/user', auth, userController.get);
router.post('/user', auth, userController.post);

router.get('/task/:id', auth, taskController.get);
router.post('/task', auth, taskController.post);
router.get('/tasks', auth, taskController.getTasksForUser);
