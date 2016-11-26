import React                      from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider }               from 'react-redux';
import { syncHistoryWithStore }   from 'react-router-redux';

import DevTools                   from '../utils/DevTools/DevTools';

import routes                     from '../routes';
import configureStore             from '../store/configureStore';

const store = configureStore();

const reduxHistory = syncHistoryWithStore(browserHistory, store);

/* eslint react/prefer-stateless-function: 0 */
class AppRouter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={reduxHistory} routes={routes} />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

export default AppRouter;
