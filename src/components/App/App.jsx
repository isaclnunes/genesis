import React    from 'react';
import { Link } from 'react-router';
/* eslint import/no-extraneous-dependencies: 0 */
import cx from 'classnames';
import s from './styles/App.scss';

import NaviagtionBar from '../NavBar/NavigationBar';

/* eslint react/prefer-stateless-function: 0 */
class App extends React.Component {
  render() {
    return (
      <div>
        <NaviagtionBar />
        <div className="container">
          <div className={cx(s['main-content'])}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element
};

export default App;
