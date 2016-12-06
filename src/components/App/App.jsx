import React            from 'react';

import HeaderNavigation from '../Navigation/HeaderNavigation';

/* eslint react/prefer-stateless-function: 0 */

/**
 * The App component
 */
class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <HeaderNavigation />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element
};

export default App;
