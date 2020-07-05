import React from 'react';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router-dom';

const Content = (props: RouteComponentProps) => {
    const routePath = props.match.path.endsWith('/')
        ? props.match.path.substring(0, -2)
        : props.match.path;

    return (
        <>
            <header>Header</header>
            
            <main>
                <h2>Content</h2>
                <Switch>
                    <Route exact path='/'>
                        <h3>Content Home</h3>
                    </Route>
                    <Route path={`${routePath}/users`}>
                        <h3>Users</h3>
                    </Route>
                </Switch>
            </main>

            <footer>Footer</footer>
        </>
    );
};

export default withRouter(Content);
