import React from 'react';
import { Route } from 'react-router';

// import components
import App from './components/App/App';
import Greeting from './components/Greeting/Greeting';
import NotFound from './components/NotFound/NotFound';

const routes = (
  <Route path="/" component={App}>
    <Route path="hello" name="TiagoP" component={Greeting} />
    <Route path="*" component={NotFound} />
  </Route>
);


export default routes;
