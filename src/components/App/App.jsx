import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Nav, Navbar, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

import './bootstrap.css';

const propTypes = {
  children: PropTypes.node
};


class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Hello World</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav navbar>
            <LinkContainer to='/time'>
              <NavItem>Время</NavItem>
            </LinkContainer>
            <LinkContainer to='/counters'>
              <NavItem>Счетчики</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;