import React      from 'react';
import { Link }   from 'react-router';
import { Navbar } from 'react-bootstrap';

/* eslint semi: 0 */
const HeaderNavigation = () =>
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Tiago Pina</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>

export default HeaderNavigation;
