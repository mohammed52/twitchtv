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
    // sn logo id, game viewers preview
    // logo {this.props.channel.status.stream.channel.url}
    return (
      <tr>
        <td>
          {this.props.serial}
        </td>
        <td>
          <img src={this.props.channel.status.stream.channel.logo}
               alt=""
               height="20px"
               width="20px" />
        </td>
        <td>
          <div>
            {this.props.channel.id}
            <br/>
            {this.props.channel.status.stream.game}
            <br/>
            {this.props.channel.status.stream.viewers}
            <br/>
          </div>
        </td>
        <td>
          <img src={this.props.channel.status.stream.preview.small}
               alt=""
               height="70px"
               width="70px" />
        </td>
      </tr>
      );
  }
}

OnlineChannelSingle.propTypes = {
  channel: PropTypes.object.isRequired,
  serial: PropTypes.number.isRequired
};

export default OnlineChannelSingle;
