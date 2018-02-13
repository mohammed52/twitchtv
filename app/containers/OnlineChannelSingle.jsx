import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import styles from './OnlineChannels.css';

var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;
var Tabs = ReactBootstrap.Tabs;
var Tab = ReactBootstrap.Tab;

class OnlineChannelSingle extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    // .stream should be !==null , .stream.channel.logo, .stream.url

    return (
      <div>
        {this.props.channel.status.id}
      </div>
    );
  }
}

OnlineChannelSingle.propTypes = {
  channel: PropTypes.object.isRequired
};

export default OnlineChannelSingle;
