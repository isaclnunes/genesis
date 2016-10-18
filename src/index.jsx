import React    from 'react';
import ReactDOM from 'react-dom';

/* eslint import/no-extraneous-dependencies: 0 */
import { AppContainer } from 'react-hot-loader';

import App from './components/App/App';

const rootEl = document.getElementById('app');

/* eslint import/prefer-default-export: 0 */
export const AppWrapper = (
  <AppContainer>
    <App />
  </AppContainer>
);

try {
  ReactDOM.render(AppWrapper, rootEl);
  if (module.hot) {
    module.hot.accept('./components/App/App', () => {
      const NextApp = require('./components/App/App').default; // eslint-disable-line
      ReactDOM.render(
        <AppContainer>
          <NextApp />
        </AppContainer>,
        rootEl
      );
    });
  }
} catch (err) {
  console.log('Render error', err);
}
