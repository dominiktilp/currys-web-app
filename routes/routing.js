import React from 'react';
import { Route } from 'react-router';
import App from '../views/App';
import Page from '../views/Page';
import NotFound from '../views/NotFound';
import Universe from '../views/Universe';

export default (

  <Route component={App}>

  <Route path="/" components={{ main: Page }} />
  <Route path="/universe/:universeId" components={{ main: Universe }} />
  <Route path="*" components={{ main: NotFound }} />

  </Route>

);
