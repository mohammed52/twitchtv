import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Navigation from '../containers/Navigation';
import Message from '../containers/Message';
import styles from '../css/main';
import MEK from '../images/MEK.png';
import favicon from '../images/favicon.png';
// import MEK from '../images/MEK.png';


var ReactBootstrap = require('react-bootstrap')
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var Nav = ReactBootstrap.Nav;
var MenuItem = ReactBootstrap.MenuItem;

const cx = classNames.bind(styles);


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
const App = ({children}) => {
  var icon = (
  <span class="logo"><a href="/"><img src={MEK}
                                      height="33"
                                      width="120"
                                      alt="text here" /></a></span>
  );

  return (
    // <div className={cx('app')}>
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><img src={MEK} width="90" height="20"/></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
        </Nav>
      </Navbar>
      hello world app containter //
      <Message />
      {children}
    </div>
    );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
