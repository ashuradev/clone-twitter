import React, { useState } from 'react';
import { Switch, Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/todos">
        <TodoList />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
