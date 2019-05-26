const mongoose = require('mongoose');

//title, status, priority, deadline, timePlan, timeFact, description

const TaskSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['new', 'inwork', 'done'],
        default: 'new'
    },
    priority: {
        type: String,
        enum: ['low', 'normal', 'high', 'critical'],
        default: 'normal'
    },
    deadline: {
        type: Date
    },
    timePlan: {
        type: Number
    },
    timeFact: {
        type: Number
    },
    description: {
        type: String
    }
});

module.exports = User = mongoose.model('task', TaskSchema);