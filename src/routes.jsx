import React                     from 'react';
import { Route, IndexRedirect }  from 'react-router';

// import components
import App          from './components/App/App';
import WeatherPage  from './components/Weather/WeatherPage';
import NotFound     from './components/NotFound/NotFound';

const routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="weather" />
    <Route path="weather" name="TiagoP" component={WeatherPage} />
    <Route path="*" component={NotFound} />
  </Route>
);


export default routes;
