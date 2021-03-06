import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import styles from './OnlineChannels.css';
import online_icon from '../images/online_icon.png';

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
          <br/>
          <img src={online_icon}
               alt=""
               height="10px"
               width="10px" />
        </td>
        <td>
          <img src={this.props.channel.status.stream.channel.logo}
               alt=""
               height="50px"
               width="50px" />
        </td>
        <td>
          <div>
            <i className="fa fa-key" />
            <a href={this.props.channel.status.stream.channel.url} target="_blank">
              {" " + this.props.channel.id}
            </a>
            <br/>
            <i className="fa fa-id-badge" />
            {" " + this.props.channel.status.stream.game}
            <br/>
            <i className="fa fa-eye" />
            {" " + this.props.channel.status.stream.viewers}
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
