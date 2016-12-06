/* eslint import/no-extraneous-dependencies: 0  */
/* eslint import/imports-first: 0  */
/* eslint no-undef: 0 */
import configureMockStore from 'redux-mock-store';
import thunk              from 'redux-thunk';
import MockAdapter        from 'axios-mock-adapter';
import axios              from 'axios';
import { fetchWeather }   from '../weatherActions';
import { API_METADATA }   from '../../../config/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockWeatherObj = {
  city: {
    id: 2643743,
    name: 'London',
    coord: {
      lon: -0.12574,
      lat: 51.50853
    },
    country: 'G',
    population: 0,
    sys: {
      population: 0
    }
  },
  cod: '200',
  message: 0.009,
  cnt: 32,
  list: []
};

describe('async actions', () => {
  it('creates FETCH_WEATHER_FULFILLED when fetching weather has been done', () => {
    const city = 'London';
    const mockAdapter = new MockAdapter(axios);
    mockAdapter.onGet(`${API_METADATA.url}${city}&units=metric&appid=480d9bf861f9f8bf52ea3615a4b0e27d`)
    .reply(200, mockWeatherObj);

    const expectedActions = [
      { type: 'FETCH_WEATHER' },
      { type: 'FETCH_WEATHER_FULFILLED', payload: mockWeatherObj }
    ];
    const store = mockStore({ weather: [] });

    return store.dispatch(fetchWeather())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
