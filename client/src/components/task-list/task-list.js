import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchTasksAction } from '../../actions/tasks-action';
import TasksViewFull from '../task-view-full';
import TaskViewShort from '../task-view-short';
import TaskViewScrum from '../task-view-scrum';

import './task-list.css';

function TaskList(props) {

    useEffect(() => {
        props.fetchTasksAction();

        //автообновление задач
        setInterval(() => {
            props.fetchTasksAction();
        }, 1000*60*5);

    }, []);

    const [tasksViewFilter, setSelectTasksViewFilter] = useState({
        value: 'full'
    });

    const selectTaskView = (e) => {
        setSelectTasksViewFilter({ value: e.target.value })
    }

    const [statusFilter, setSelectStatus] = useState({
        value: 'all'
    });

    const selectStatusFilter = (e) => {
        setSelectStatus({ value: e.target.value });
    }

    const [sortBy, setSortByDeadline] = useState({
        value: null
    });

    const sortByDeadline = (e) => {
        setSortByDeadline((prevstate) => {
            return { value: !prevstate.value }
        });
    }

    const { tasks } = props;
    if (!tasks) {
        return null;
    }

    let tasksToShow;

    //filter by status
    if (statusFilter.value === 'all') {
        tasksToShow = tasks;
    } else if (statusFilter.value === 'new') {
        tasksToShow = tasks.filter(task => task.status === 'new');
    } else if (statusFilter.value === 'inwork') {
        tasksToShow = tasks.filter(task => task.status === 'inwork');
    } else if (statusFilter.value === 'done') {
        tasksToShow = tasks.filter(task => task.status === 'done');
    }

    //sort by deadline
    if (sortBy.value) {
        tasksToShow = tasksToShow.sort((ob1, ob2) => {

            let deadline1 = new Date(Date.parse(ob1.deadline));
            let deadline2 = new Date(Date.parse(ob2.deadline));

            if (deadline1 > deadline2) {
                return 1;
            } else if (deadline1 < deadline2) {
                return -1;
            } else {
                return 0;
            }
        })
    } else {
        tasksToShow = tasksToShow.sort((ob1, ob2) => {

            let deadline1 = new Date(Date.parse(ob1.deadline));
            let deadline2 = new Date(Date.parse(ob2.deadline));

            if (deadline1 < deadline2) {
                return 1;
            } else if (deadline1 > deadline2) {
                return -1;
            } else {
                return 0;
            }
        })
    }

    //select view
    let tasksView;
    if (tasksViewFilter.value === 'full') {
        tasksView = <TasksViewFull tasks={tasksToShow} sortByDeadline={sortByDeadline} />
    } else if (tasksViewFilter.value === 'short') {
        tasksView = <TaskViewShort tasks={tasksToShow} sortByDeadline={sortByDeadline} />
    } else {
        tasksView = <TaskViewScrum tasks={tasksToShow} sortByDeadline={sortByDeadline} />
    }

    return (

        <Fragment>
            <div className='tasks-filter-container' >

                <div className='task-filter-item'>
                    <label htmlFor="taskViewFilter">View</label>
                    <select id='taskViewFilter' className='task-filter' onChange={selectTaskView} >
                        <option value={'full'} defaultChecked >Full</option>
                        <option value={'short'}>Short</option>
                        <option value={'scrum'}>Scrum</option>
                    </select>
                </div>

                <div className='task-filter-item'>
                    <label htmlFor="statusFilter">Status</label>
                    <select id='statusFilter' className='task-filter' onChange={selectStatusFilter} >
                        <option value={'all'} defaultChecked >All</option>
                        <option value={'new'} >New</option>
                        <option value={'inwork'}>In work</option>
                        <option value={'done'}>Done</option>
                    </select>
                </div>

            </div>


            {tasksView}
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        isTasksLoading: state.taskReducer.tasksLoading,
        tasks: state.taskReducer.tasks
    }
}

export default connect(mapStateToProps, { fetchTasksAction })(TaskList);