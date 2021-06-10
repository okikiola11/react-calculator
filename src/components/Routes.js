import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import App from './App';
import Home from './Home';
import Quote from './Quote';

const Routes = () => (
  <Router>
    <Nav />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calculator" component={App} />
      <Route exact path="/quote" component={Quote} />
    </Switch>
  </Router>
);

export default Routes;
