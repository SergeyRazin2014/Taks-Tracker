import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchTaskByIdAction } from '../../actions/tasks-action';

import './task-item.css';

class TaskItem extends React.Component {

    componentDidMount() {
        this.props.fetchTaskByIdAction(this.props.taskId);
    }

    render() {

        if (!this.props.task) {
            return null;
        }

        const deadline = new Date(Date.parse(this.props.task.deadline)).toLocaleDateString();

        return (

            <Fragment>
                {/* <div>
                    <h3>{this.props.task.title}</h3>
                    <p>Status: {this.props.task.status}</p>
                    <p>Priority: {this.props.task.priority}</p>
                    <p>Deadline: {deadline}</p>
                    <p>Time plan: {this.props.task.timePlan}</p>
                    <p>Time fact: {this.props.task.timeFact}</p>
                    <p>Description: {this.props.task.description}</p>
                </div> */}


                <h3>{this.props.task.title}</h3>

                <table>
                    <tbody>
                        <tr>
                            <td>Status:</td>
                            <td>{this.props.task.status}</td>
                        </tr>
                        <tr>
                            <td>Priority:</td>
                            <td>{this.props.task.priority}</td>
                        </tr>
                        <tr>
                            <td>Deadline:</td>
                            <td>{deadline}</td>
                        </tr>
                        <tr>
                            <td>Time plan (hrs):</td>
                            <td>{this.props.task.timePlan}</td>
                        </tr>
                        <tr>
                            <td>Time fact (hrs):</td>
                            <td>{this.props.task.timeFact}</td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>{this.props.task.description}</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        )
    }


}

const mapStateToProps = (state) => {

    return {
        task: state.taskReducer.task
    }
}

export default connect(mapStateToProps, { fetchTaskByIdAction })(TaskItem);