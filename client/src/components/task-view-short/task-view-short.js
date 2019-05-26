import React from 'react';

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

const TasksViewShort = (props) => {

    const classes = useStyles();

    const { tasks, sortByDeadline } = props;

    return <Paper className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell className={classes.header} >Title</TableCell>
                    <TableCell className={classes.header} align="right">Priority</TableCell>
                    <TableCell className={classes.header} align="right">Status</TableCell>
                    <TableCell className={classes.header} style={{ cursor: 'pointer' }} align="right" onClick={sortByDeadline} >Deadline</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>

                {tasks.map((task) => {

                    let deadlineStr = new Date(Date.parse(task.deadline)).toLocaleDateString();

                    return <TableRow key={task._id}>
                        <TableCell style={{ width: '30%' }}><strong> {task.title}</strong> </TableCell>
                        <TableCell align="right">{task.priority}</TableCell>
                        <TableCell align="right">{task.status}</TableCell>
                        <TableCell align="right">{deadlineStr}</TableCell>
                    </TableRow>
                })}

            </TableBody>
        </Table>
    </Paper>



}

export default TasksViewShort;

