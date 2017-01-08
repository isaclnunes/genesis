import React, { PropTypes } from 'react';
import { connect }          from 'react-redux';

import { fetchCurrentPrice }     from '../../actions/bitcoinActions';

import BitcoinSummary from './BitcoinSummary';

class BitcoinPage extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchCurrentPrice());
  }

  render() {
    const { bitcoinPrice, fetched, error } = this.props;
    const summary = fetched ?
      <BitcoinSummary {...bitcoinPrice} /> :
      <p>Bitcoin prices not fetched</p>;
    return (
      <div className="bitcoin-page">
        {summary}
      </div>
    );
  }
}

/* eslint react/forbid-prop-types: 0 */
/* eslint react/prop-types: 0 */
BitcoinPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  bitcoinPrice: PropTypes.object
};

/* eslint no-class-assign: 0 */
BitcoinPage = connect(
  (store) => {
    return {
      bitcoinPrice: store.bitcoinPriceReducer.bitcoinPrice,
      fetched: store.bitcoinPriceReducer.fetched,
      error: store.bitcoinPriceReducer.error
    };
  }
)(BitcoinPage);

export default BitcoinPage;
