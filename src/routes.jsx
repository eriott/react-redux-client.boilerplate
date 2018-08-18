import React from 'react';
import {Route, Switch} from 'react-router';
import App from './components/App';
import CounterPage from './components/CounterPage';
import HelloWorldPage from './components/HelloWorldPage';
import TimePage from './components/TimePage';

export default (
  <App>
    <Switch>
      <Route component={HelloWorldPage} exact path='/'/>
      <Route component={CounterPage} path='/counters'/>
      <Route component={TimePage} path='/time'/>
    </Switch>
  </App>
);