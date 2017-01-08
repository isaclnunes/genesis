/* eslint import/prefer-default-export: 0 */
export const WEATHER_API_METADATA = {
  url: 'http://api.openweathermap.org/data/2.5/forecast?q=',
  appid: '480d9bf861f9f8bf52ea3615a4b0e27d'
};

export const BITCOIN_API_METADATA = {
  url: 'http://api.coindesk.com/v1/bpi/',
  currentPrice: 'currentprice',
  supportedCurrencies: 'supported-currencies',
  historical: 'historical/close'
};
