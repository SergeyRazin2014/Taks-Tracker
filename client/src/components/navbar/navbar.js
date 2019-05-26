import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { withRouter } from 'react-router-dom';
import logoutAction from '../../actions/logout-action';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Navbar(props) {

    const classes = useStyles();



    const logout = (e) => {

        props.logoutAction();
        props.history.push('/auth');

    }

    if (!localStorage.token) {
        return null;
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Task-Tracker
          </Typography>
                    <Button color="inherit" onClick={logout} >Log Out</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        user: state.authReducer.user,
        token: state.authReducer.token
    }
}

export default connect(mapStateToProps, { logoutAction })(withRouter(Navbar));