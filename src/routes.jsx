import React                     from 'react';
import { Route, IndexRedirect }  from 'react-router';

// import components
import App          from './components/App/App';
import WeatherPage  from './components/Weather/WeatherPage';
import BitcoinPage  from './components/Bitcoin/BitcoinPage';
import NotFound     from './components/NotFound/NotFound';

const routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="weather" />
    <Route path="weather" component={WeatherPage} />
    <Route path="bitcoin" component={BitcoinPage} />
    <Route path="*" component={NotFound} />
  </Route>
);


export default routes;
