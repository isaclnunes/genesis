/* eslint import/no-extraneous-dependencies: 0  */
/* eslint import/imports-first: 0  */
/* eslint no-undef: 0 */
import reducer from '../bitcoinPriceReducer';

describe('bitcoin reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        bitcoinPrice: {},
        fetching: false,
        fetched: false,
        error: null
      }
    );
  });

  it('should handle FETCH_CURRENT_BITCOIN_PRICE', () => {
    expect(
      reducer({}, {
        type: 'FETCH_CURRENT_BITCOIN_PRICE',
        fetching: true
      })
    ).toEqual(
      {
        fetching: true
      }
    );
  });

  it('should handle FETCH_CURRENT_BITCOIN_PRICE_REJECTED', () => {
    expect(
      reducer({}, {
        type: 'FETCH_CURRENT_BITCOIN_PRICE_REJECTED',
        payload: 'some error'
      })
    ).toEqual(
      {
        fetching: false,
        error: 'some error'
      }
    );
  });

  it('should handle FETCH_CURRENT_BITCOIN_PRICE_FULFILLED', () => {
    expect(
      reducer({}, {
        type: 'FETCH_CURRENT_BITCOIN_PRICE_FULFILLED',
        payload: 'mock bitcoin object'
      })
    ).toEqual(
      {
        fetching: false,
        fetched: true,
        error: null,
        bitcoinPrice: 'mock bitcoin object'
      }
    );
  });
});
