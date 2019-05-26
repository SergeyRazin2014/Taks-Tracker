import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    header: {
        color: 'white',
        backgroundColor: '#3F51B5',
        border: '1px solid #3F51B5'
    }
}));

const TasksViewFull = (props) => {

    const classes = useStyles();

    const { tasks, sortByDeadline } = props;

    return <Paper className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
                <TableRow >
                    <TableCell className={classes.header} >Title</TableCell>
                    <TableCell className={classes.header} align="right">Priority</TableCell>
                    <TableCell className={classes.header} align="right">Status</TableCell>
                    <TableCell className={classes.header} style={{ cursor: 'pointer' }} align="right" onClick={sortByDeadline} >Deadline</TableCell>
                    <TableCell className={classes.header} >Description</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>

                {tasks.map((task) => {

                    let deadlineStr = new Date(Date.parse(task.deadline)).toLocaleDateString();

                    if (task.description.length > 100) {
                        task.description = task.description.slice(0, 100) + '...';
                    }

                    const url = `/task/${task._id}`;

                    return <TableRow key={task._id}>
                        <TableCell style={{ width: '30%' }}><Link to={url} > {task.title}</Link> </TableCell>
                        <TableCell align="right">{task.priority}</TableCell>
                        <TableCell align="right">{task.status}</TableCell>
                        <TableCell align="right">{deadlineStr}</TableCell>
                        <TableCell >{task.description}</TableCell>
                    </TableRow>
                })}

            </TableBody>
        </Table>
    </Paper>



}

export default TasksViewFull;

