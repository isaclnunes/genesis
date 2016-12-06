import React                      from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider }               from 'react-redux';
import { syncHistoryWithStore }   from 'react-router-redux';

import routes                     from '../../routes';
import configureStore             from '../../store/configureStore';

const store = configureStore();
const reduxHistory = syncHistoryWithStore(browserHistory, store);

/**
 * Statelless function component representing the app router.
 */
const AppRouter = () =>
  /* eslint semi: 0 */
  <Provider store={store}>
    <div>
      <Router history={reduxHistory} routes={routes} />
    </div>
  </Provider>

export default AppRouter;
