import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import './OnlineChannels.css';

var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;
var Tabs = ReactBootstrap.Tabs;
var Tab = ReactBootstrap.Tab;

class OnlineChannelsComponent extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    // .stream should be !==null , .stream.channel.logo, .stream.url

    if (this.props.channelsStatusArr !== undefined) {

      for (var i = 0; i < this.props.channelsStatusArr.length; i++) {
        console.log(this.props.channelsStatusArr[i].status)
      }
    }
    return (
      <div>
        OnlineChannelsComponent
      </div>
      );
  }
}

OnlineChannelsComponent.propTypes = {
  channelsStatusArr: PropTypes.array.isRequired
};

export default OnlineChannelsComponent;
