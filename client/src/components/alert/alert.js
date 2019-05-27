import React from 'react';
import { connect } from 'react-redux';

import SimpleSnackbar from '../snackBar';

const Alert = (props) => {

    if (props.alerts !== null && props.alerts.length > 0) {

        return props.alerts.map((alert) => (
            <SimpleSnackbar key={alert.id} message={alert.message} />
        ));
    } else {
        return null;
    }
}


const mapStateToProps = (state) => {

    return {
        alerts: state.alertReducer.alerts
    };
}


export default connect(mapStateToProps)(Alert);
