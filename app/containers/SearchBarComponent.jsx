import React, { Component } from 'react';
// import logo from './logo.svg';
import './SearchBar.css';

var ReactBootstrap = require('react-bootstrap');

var FieldGroup = ReactBootstrap.FieldGroup;

class SearchBarComponent extends Component {

  constructor(props, context) {
    super(props, context);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(e) {}

  render() {
    return (
      <div>
        <div className="search">
          <span className="fa fa-search"></span>
          <input placeholder="Search game" className="form-control searchInputBox" />
        </div>
      </div>
      );
  }
}

export default SearchBarComponent;
