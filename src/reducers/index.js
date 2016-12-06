import { combineReducers }          from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import weatherReducer               from './weatherReducer';

const rootReducer = combineReducers({
  weatherReducer,
  routing
});

export default rootReducer;
