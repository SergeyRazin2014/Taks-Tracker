import React from 'react';
import TaskCard from '../task-card';

import './task-view-scrum.css';

const taskViewScrum = ({ tasks }) => {

    let newTasks = tasks.filter(x => x.status === 'new');
    let inworkTasks = tasks.filter(x => x.status === 'inwork');
    let doneTasks = tasks.filter(x => x.status === 'done');

    let newTasksElements = newTasks.map((task) => {
        return <TaskCard key={task.id} task={task} />
    });

    let inworkTasksElements = inworkTasks.map((task) => {
        return <TaskCard key={task.id} task={task} />
    })

    let doneTasksElements = doneTasks.map((task) => {
        return <TaskCard key={task.id} task={task} />
    })

    return (
        <div className='task-view-scrum-container'>
            <div className='task-block task-block-new'>
                <h2>New</h2>
                {newTasksElements}
            </div>
            <div className='task-block task-block-inwork'>
                <h2>Doing</h2>
                {inworkTasksElements}
            </div>
            <div className='task-block task-block-done'>
                <h2>Done</h2>
                {doneTasksElements}
            </div>
        </div>
    )
}

export default taskViewScrum;