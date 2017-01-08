export default function reducer(state = {
  bitcoinPrice: {},
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_CURRENT_BITCOIN_PRICE': {
      return { ...state, fetching: true };
    }
    case 'FETCH_CURRENT_BITCOIN_PRICE_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }
    case 'FETCH_CURRENT_BITCOIN_PRICE_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        bitcoinPrice: action.payload,
      };
    }
    default:
      return state;
  }
}
