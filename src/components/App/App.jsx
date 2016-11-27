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
          <div className={cx(s['main-title'])}>
            <h2>TP ReactJS Starter Kit</h2>
            <Link to="/">Root</Link>&nbsp;
            <Link to="/hello">Hello</Link>
          </div>
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
