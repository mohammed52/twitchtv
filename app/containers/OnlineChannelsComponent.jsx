import React, { Component } from 'react';
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
    // .stream.channel.logo, .stream.url , 

    if (this.props.channelsStatusArray != undefined) {

      for (var i = 0; i < this.props.channelsStatusArray.length; i++) {
        this.props.channelsStatusArray[i]
      }
    }
    return (
      <div>
        OnlineChannelsComponent
      </div>
    );
  }
}

export default OnlineChannelsComponent;
