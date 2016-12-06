/* eslint import/no-extraneous-dependencies: 0  */
/* eslint import/imports-first: 0  */
/* eslint no-undef: 0 */
import reducer    from '../weatherReducer';

describe('weather reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        weather: {
          city: null,
          country: null,
          list: []
        },
        fetching: false,
        fetched: false,
        error: null
      }
    );
  });

  it('should handle FETCH_WEATHER', () => {
    expect(
      reducer({}, {
        type: 'FETCH_WEATHER',
        fetching: true
      })
    ).toEqual(
      {
        fetching: true
      }
    );
  });

  it('should handle FETCH_WEATHER_REJECTED', () => {
    expect(
      reducer({}, {
        type: 'FETCH_WEATHER_REJECTED',
        payload: 'some error'
      })
    ).toEqual(
      {
        fetching: false,
        error: 'some error'
      }
    );
  });

  it('should handle FETCH_WEATHER_FULFILLED', () => {
    expect(
      reducer({}, {
        type: 'FETCH_WEATHER_FULFILLED',
        payload: 'mock weather object'
      })
    ).toEqual(
      {
        fetching: false,
        fetched: true,
        error: null,
        weather: 'mock weather object'
      }
    );
  });
});
