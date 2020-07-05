import React from 'react';
import { Switch, Route, withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

const Account = (props: RouteComponentProps) => {
    return (
        <main>
            <Switch>
                <Route path={`${props.match.path}/register`}>
                    <Register />
                </Route>
                <Route path={`${props.match.path}/login`}>
                    <Login />
                </Route>
                <Route path={`${props.match.path}`}>
                    <Redirect to={`${props.match.path}/login`} />
                </Route>
            </Switch>
        </main>
    );
};

export default withRouter(Account);
