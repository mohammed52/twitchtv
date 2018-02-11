import React, { Component } from 'react';
// import logo from './logo.svg';
import './SearchBar.css';

var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;
var Tabs = ReactBootstrap.Tabs;
var Tab = ReactBootstrap.Tab;

class OnlineComponent extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        Online Component
      </div>
    );
  }
}

export default OnlineComponent;
