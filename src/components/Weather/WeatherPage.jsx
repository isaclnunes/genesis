import React, { PropTypes } from 'react';
import { connect }          from 'react-redux';

import { fetchWeather }     from '../../actions/weatherActions';

import Weather from '../Weather/Weather';

class WeatherPage extends React.Component {

  constructor() {
    super();
    this._handleKeyPress = this._handleKeyPress.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchWeather());
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.dispatch(fetchWeather(e.target.value));
    }
  }

  render() {
    const { weather, fetched, error } = this.props;
    let results = null;

    if (error !== undefined && fetched) {
      results = <Weather {...weather} />;
    } else if (error !== undefined && !fetched) {
      results = <p>Fetching weather, please wait...</p>;
    }

    return (
      <div className="weather-component">
        <input type="text" className="form-control" placeholder="Search for city" onKeyPress={this._handleKeyPress} />
        {error !== null ? 'Error fetching weather' : results}
      </div>
    );
  }
}

/* eslint react/forbid-prop-types: 0 */
/* eslint react/prop-types: 0 */
WeatherPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  weather: PropTypes.object
};

/* eslint no-class-assign: 0 */
WeatherPage = connect(
  (store) => {
    return {
      weather: store.weatherReducer.weather,
      fetched: store.weatherReducer.fetched,
      error: store.weatherReducer.error
    };
  }
)(WeatherPage);

export default WeatherPage;
