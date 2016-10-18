import React, { Component } from 'react';

import Greeting from '../Greeting/Greeting';
import './App.scss';

/* eslint react/prefer-stateless-function: 0 */
class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h2>Pina React Starter Kit - Tiago</h2>
        <Greeting name="Tiago!" />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default App;
