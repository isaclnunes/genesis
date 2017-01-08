import axios from 'axios';

import { BITCOIN_API_METADATA } from '../../config/constants';

function fetchCurrentPriceRequest() {
  return {
    type: 'FETCH_CURRENT_BITCOIN_PRICE'
  };
}

function fetchCurrentPriceFulfilled(data) {
  return {
    type: 'FETCH_CURRENT_BITCOIN_PRICE_FULFILLED',
    payload: data
  };
}

function fetchCurrentPriceRejected(error) {
  return {
    type: 'FETCH_CURRENT_BITCOIN_PRICE_REJECTED',
    payload: error
  };
}

/* eslint import/prefer-default-export: 0 */
export function fetchCurrentPrice() {
  return (dispatch) => {
    dispatch(fetchCurrentPriceRequest());
    return axios.get(`${BITCOIN_API_METADATA.url}${BITCOIN_API_METADATA.currentPrice}.json`)
      .then(response => dispatch(fetchCurrentPriceFulfilled(response.data)))
      .catch(err => dispatch(fetchCurrentPriceRejected(err)));
  };
}
