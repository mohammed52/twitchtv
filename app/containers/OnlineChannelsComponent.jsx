import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import styles from './OnlineChannels.css';
import OnlineChannelSingle from './OnlineChannelSingle'

var ReactBootstrap = require('react-bootstrap');

var Table = ReactBootstrap.Table;
var Button = ReactBootstrap.Button;
var Tabs = ReactBootstrap.Tabs;
var Tab = ReactBootstrap.Tab;

class OnlineChannelsComponent extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    // .status.stream should be !==null , .status.stream.channel.logo, .status.stream.url

    let arrSingleChannels = [];
    if (this.props.channelsStatusArr !== undefined) {

      for (var i = 0; i < this.props.channelsStatusArr.length; i++) {
        console.log(this.props.channelsStatusArr[i].status)
        if (this.props.channelsStatusArr !== null && this.props.channelsStatusArr[i].status != null) {
          if (this.props.channelsStatusArr[i].status.stream != undefined) {
            arrSingleChannels.push(
              <OnlineChannelSingle channel={this.props.channelsStatusArr[i]} serial={i + 1} />
            )
          }
        }
      }
    }
    return (
      <div>
        <Table>
          <tbody>
            {arrSingleChannels}
          </tbody>
        </Table>
      </div>
      );
  }
}

OnlineChannelsComponent.propTypes = {
  channelsStatusArr: PropTypes.array.isRequired
};

export default OnlineChannelsComponent;
