import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Feed from '../pages/Feed';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/feed" />
    </Route>
    <Route path="/feed" component={Feed} />
    <Route path="/login" component={Login} isGuest />
    <Route path="/register" component={Register} isGuest />
  </Switch>
);

export default Routes;
