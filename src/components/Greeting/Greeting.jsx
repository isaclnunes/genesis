import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions/userActions';
import { fetchTweets } from '../../actions/tweetsActions';

import renderButtons from './renderButtons';

import './greeting.css';

class Greeting extends React.Component {

  constructor() {
    super();
    this.fetchTweets = this.fetchTweets.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchUser());
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets());
  }

  render() {
    const { user, tweets } = this.props;

    if (!tweets.length) {
      return (<button onClick={this.fetchTweets}>load tweets</button>);
    }

    const mappedTweets = tweets.map((tweet, index) => <li key={index}>{tweet.text}</li>);

    return (
      <div className="greeting">

        <h1>{user.name}</h1>
        <ul>{mappedTweets}</ul>

        <span className="greetingText">Hello, {this.props.name}!</span>
        <br />
        <span>Here are some buttons</span>
        <br />
        {renderButtons()}
        <br />
        <span>And some icons</span>
        <br />
        <i className="fa fa-linkedin" />
        <i className="fa fa-github" />
        <i className="fa fa-twitter" />

      </div>
    );
  }
}

Greeting.propTypes = {
  route: PropTypes.shape({}),
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string,
  user: PropTypes.shape({}),
  tweets: PropTypes.array /* eslint react/forbid-prop-types: 0 */
};

/* eslint no-class-assign: 0 */
Greeting = connect(
  (store) => {
    return {
      user: store.user.user,
      userFetched: store.user.fetched,
      tweets: store.tweets.tweets,
    };
  }
)(Greeting);

export default Greeting;
