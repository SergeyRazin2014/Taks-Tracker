import React from 'react';

import ErrorIndicator from '../error-indicator';


class ErrorBoundry extends React.Component {
    componentDidCatch() {
        this.setState({ hasError: true })
    }

    state = { hasError: false }

    render(){
        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        return this.props.children;
    }
}

export default ErrorBoundry;