import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import styles from './OnlineChannels.css';
import no_image from '../images/no_image.png';
import offline_icon from '../images/offline_icon.png';

var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;
var Tabs = ReactBootstrap.Tabs;
var Tab = ReactBootstrap.Tab;

class OfflineChannelSingle extends Component {

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
          <img src={offline_icon}
               alt=""
               height="10px"
               width="10px" />
        </td>
        <td>
          <img src={no_image}
               alt=""
               height="50px"
               width="50px" />
        </td>
        <td>
          <div>
            <i className="fa fa-key" />
            {" " + this.props.channel.id}
          </div>
        </td>
        <td>
        </td>
      </tr>
    );
  }
}

OfflineChannelSingle.propTypes = {
  channel: PropTypes.object.isRequired,
  serial: PropTypes.number.isRequired
};

export default OfflineChannelSingle;
