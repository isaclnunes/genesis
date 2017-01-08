import axios from 'axios';

import { WEATHER_API_METADATA } from '../../config/constants';

function fetchWeatherRequest() {
  return {
    type: 'FETCH_WEATHER'
  };
}

function fetchWeatherFulfilled(data) {
  return {
    type: 'FETCH_WEATHER_FULFILLED',
    payload: data
  };
}

function fetchWeatherRejected(error) {
  return {
    type: 'FETCH_WEATHER_REJECTED',
    payload: error
  };
}

/* eslint import/prefer-default-export: 0 */
export function fetchWeather(city = 'London') {
  return (dispatch) => {
    dispatch(fetchWeatherRequest());
    return axios.get(`${WEATHER_API_METADATA.url}${city}&units=metric&appid=480d9bf861f9f8bf52ea3615a4b0e27d`)
      .then(response => dispatch(fetchWeatherFulfilled(response.data)))
      .catch(err => dispatch(fetchWeatherRejected(err)));
  };
}
