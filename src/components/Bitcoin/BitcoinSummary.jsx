import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import priceRenderer from './priceRenderer';

/* eslint semi: 0 */
const BitcoinSummary = (summary) => {
  return (
    <div>
      <div className="container">
        <p>Current price as of: {summary.time.updateduk}</p>
        {priceRenderer(summary.bpi)}
      </div>
      <footer>{summary.disclaimer}</footer>
    </div>
  )
};

/* eslint react/forbid-prop-types: 0 */
BitcoinSummary.propTypes = {
  summary: PropTypes.object
};

export default BitcoinSummary;
