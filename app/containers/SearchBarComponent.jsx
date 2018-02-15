import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
          <input placeholder="Search game"
                 className="form-control searchInputBox"
                 defaultValue={this.props.searchInput}
                 onChange={this.props.onSearchInputChange} />
        </div>
      </div>
      );
  }
}

SearchBarComponent.propTypes = {
  onSearchInputChange: PropTypes.function,
  searchInput: PropTypes.string
};

export default SearchBarComponent;
