import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Login from './Login';
import Profile from './Profile';
import Layout from './Layout';

const history = createBrowserHistory();

const App = () => (
  <Layout>
    <Router history={history}>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="*" component={Login} />    
      </Switch>
    </Router>
  </Layout>
);

export default App;
