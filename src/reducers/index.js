import { combineReducers } from 'redux';
import { routerReducer as routing }                      from 'react-router-redux';
import tweets             from './tweetsReducer';
import user               from './userReducer';

const rootReducer = combineReducers({
  tweets,
  user,
  routing
});

export default rootReducer;
