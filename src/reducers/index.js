import { combineReducers }          from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import weatherReducer               from './weatherReducer';
import bitcoinPriceReducer          from './bitcoinPriceReducer';

const rootReducer = combineReducers({
  weatherReducer,
  bitcoinPriceReducer,
  routing
});

export default rootReducer;
