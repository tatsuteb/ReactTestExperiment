import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Account from './components/Account';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path='/accounts'>
          <Account />
        </Route>
        <Route path='/'>
          <Content />
        </Route>
      </Switch>
    </>
  );
}

export default App;
