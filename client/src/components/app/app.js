import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ErrorBoundry from '../error-boundry';
import store from '../../store';
import Login from '../login';
import setAuthToken from '../../utils/set-auth-token';
import TaskList from '../task-list';
import Navbar from '../navbar';
import TaskItem from '../task-item';
import { fetchUser } from '../../actions/auth-action';
import Alert from '../alert';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

store.dispatch(fetchUser());

class App extends React.Component {



    render() {
        return (
            <Provider store={store}>
                <ErrorBoundry>
                    <Router>
                        <Alert />
                        <Navbar />
                        <Switch>
                            <Route path='/' component={Login} exact />
                            <Route path='/auth' component={Login} exact />
                            <Route path='/tasks' component={TaskList} exact />
                            <Route path='/task/:id' render={({ match, location, history }) => {

                                const { id } = match.params;
                                return <TaskItem taskId={id} />
                            }
                            } />
                        </Switch>
                    </Router>
                </ErrorBoundry>
            </Provider>
        );
    }
}

export default App;