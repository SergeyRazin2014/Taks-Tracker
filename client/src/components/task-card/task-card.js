import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        marginBottom: 10
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function TaskCard({ task }) {
    const classes = useStyles();

    const deadlineStr = new Date(Date.parse(task.deadline)).toLocaleDateString();



    return (
        <Card className={classes.card}>
            <CardContent>

                <Typography variant="h5" component="h2">
                    {task.title}
                </Typography>

                <hr />

                <Typography variant="body2" component="p">
                    status: {task.status} <br />
                    priority: {task.priority} <br />
                    deadline: {deadlineStr}


                </Typography>

            </CardContent>

        </Card>
    );
}

export default TaskCard;