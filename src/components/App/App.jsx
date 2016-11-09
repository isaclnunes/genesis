import React from 'react';
import { Link } from 'react-router';

import './App.scss';

/* eslint react/prefer-stateless-function: 0 */
class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <h2>Tiago&apos;s ReactJS Starter Kit</h2>
        <Link to="/">Root</Link>&nbsp;
        <Link to="/hello">Hello</Link>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element
};

export default App;
