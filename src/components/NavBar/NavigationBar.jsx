import React from 'react';
import { Link } from 'react-router';
import { Navbar } from 'react-bootstrap';

const NavigationBar = () =>
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/about">TP React Starter Kit</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>;

export default NavigationBar;
