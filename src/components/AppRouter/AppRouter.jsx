import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../../routes';

/* eslint react/prefer-stateless-function: 0 */
class AppRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes} />
    );
  }
}

export default AppRouter;
