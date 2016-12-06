import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import renderWeather from './renderWeather';

/* eslint semi: 0 */
const Weather = (weather) => {
  const gpsLink = `http://maps.google.com/maps?q=${weather.city.coord.lat},${weather.city.coord.lon}`;
  return (
    <div className="container">
      <h1>Current weather in {weather.city.name}, {weather.city.country}</h1>
      <h4>GPS coords: <Link target="_blank" to={gpsLink} >[{weather.city.coord.lon}, {weather.city.coord.lat}]</Link></h4>
      {renderWeather(weather.list)}
    </div>
  )
};

/* eslint react/forbid-prop-types: 0 */
Weather.propTypes = {
  weather: PropTypes.object
};

export default Weather;
