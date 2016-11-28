import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';

const NavigationBar = () =>
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">TP React Starter Kit</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <IndexLinkContainer to="/hello">
          <NavItem>Hello</NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to="/about">
          <NavItem>About</NavItem>
        </IndexLinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;

export default NavigationBar;
