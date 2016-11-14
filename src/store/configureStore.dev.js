import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools'; /* eslint import/no-extraneous-dependencies: 0 */
import promise                                           from 'redux-promise-middleware';
import thunk                                     from 'redux-thunk';
import createLogger                              from 'redux-logger';
import rootReducer                               from '../reducers';
import DevTools                                  from '../components/DevTools/DevTools';

const enhancer = compose(
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  ),
  applyMiddleware(promise(), thunk, createLogger()),
  DevTools.instrument()
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default) /* eslint global-require: 0 */
    );
  }
  return store;
}
