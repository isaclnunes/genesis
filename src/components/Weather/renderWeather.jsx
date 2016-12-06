import React  from 'react';
import moment from 'moment';
import R      from 'ramda';

const renderWeather = (weatherArray) => {
  const days = R.groupBy(
    weatherItem => moment(weatherItem.dt * 1000).format('dddd, MMMM Do YYYY')
  );
  return Object.entries(days(weatherArray)).map((dayArray, index) => {
    const weatherForTheDay = dayArray[1].map((weatherItem, idx) => {
      const convertedDate = moment(weatherItem.dt * 1000).format('h:mm a');
      const imgSrc = `http://openweathermap.org/img/w/${weatherItem.weather[0].icon}.png`;
      return (
        <div key={idx} className="weather-item">
          <img src={imgSrc} alt={weatherItem.weather[0].icon} />
          <span>At: {convertedDate}</span><br />
          <span>
            Temperature of {weatherItem.main.temp}ºC with {weatherItem.weather[0].description}
            &nbsp;and wind speed of {weatherItem.wind.speed}Km/h.
          </span><br />
          <span>Max Temp: {weatherItem.main.temp_max}ºC</span><br />
          <span>Min Temp: {weatherItem.main.temp_min}ºC</span>
        </div>
      );
    });
    return (
      <div key={index} className="col-md-8">
        <h3>{dayArray[0]}</h3>
        {weatherForTheDay}
      </div>
    );
  });
};

export default renderWeather;
