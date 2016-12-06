export default function reducer(state = {
  weather: {
    city: null,
    country: null,
    list: []
  },
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_WEATHER': {
      return { ...state, fetching: true };
    }
    case 'FETCH_WEATHER_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }
    case 'FETCH_WEATHER_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        weather: action.payload,
      };
    }
    default:
      return state;
  }
}
