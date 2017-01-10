import React  from 'react';

const priceRenderer = (prices) => {
  const currencies = Object.keys(prices);
  const priceForCurrency = currencies.map((currency, index) => {
    const { symbol } = prices[currency];
    return (
      <li key={index}>
        1Ƀ = {prices[currency].rate_float} ({prices[currency].code}) - {symbol}
      </li>
    );
  });
  return (
    <div className="col-md-8">
      <ul>
        {priceForCurrency}
      </ul>
    </div>
  );
};

export default priceRenderer;
