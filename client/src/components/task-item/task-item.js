import React from 'react';
import { connect } from 'react-redux';
import { fetchTaskByIdAction } from '../../actions/tasks-action';

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
            <div>
                <h3>{this.props.task.title}</h3>
                <p>{this.props.task.status}</p>
                <p>{this.props.task.priority}</p>
                <p>{deadline}</p>
                <p>{this.props.task.timePlan}</p>
                <p>{this.props.task.timeFact}</p>
                <p>{this.props.task.description}</p>
            </div>
        )
    }


}

const mapStateToProps = (state) => {

    return {
        task: state.taskReducer.task
    }
}

export default connect(mapStateToProps, { fetchTaskByIdAction })(TaskItem);