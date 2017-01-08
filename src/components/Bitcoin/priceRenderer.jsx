import React  from 'react';

const priceRenderer = (prices) => {
  const priceForCurrency = prices.map((currency) => {
    return (
      <li>{currency.code}</li>
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
