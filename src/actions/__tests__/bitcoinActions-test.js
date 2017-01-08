/* eslint import/no-extraneous-dependencies: 0  */
/* eslint import/imports-first: 0  */
/* eslint no-undef: 0 */
import configureMockStore       from 'redux-mock-store';
import thunk                    from 'redux-thunk';
import MockAdapter              from 'axios-mock-adapter';
import axios                    from 'axios';
import { fetchCurrentPrice }    from '../bitcoinActions';
import { BITCOIN_API_METADATA } from '../../../config/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockBitCoinObj = {
  dummyProp1: 'I\'m a dummy prop',
  dummyProp2: 2,
  list: []
};

describe('bitcoins async actions', () => {
  it('creates FETCH_CURRENT_BITCOIN_PRICE_FULFILLED when fetching bitcoin prices has been done', () => {
    const mockAdapter = new MockAdapter(axios);
    mockAdapter.onGet(`${BITCOIN_API_METADATA.url}${BITCOIN_API_METADATA.currentPrice}.json`)
    .reply(200, mockBitCoinObj);
    const expectedActions = [
      { type: 'FETCH_CURRENT_BITCOIN_PRICE' },
      { type: 'FETCH_CURRENT_BITCOIN_PRICE_FULFILLED', payload: mockBitCoinObj }
    ];
    const store = mockStore({ prices: [] });

    return store.dispatch(fetchCurrentPrice())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
