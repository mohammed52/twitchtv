import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import styles from './OnlineChannels.css';
import OnlineChannelSingle from './OnlineChannelSingle'
import { matchesSearchInput } from './helpers/matchesSearchInput'

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

    var snCount = 1;
    let arrSingleChannelsOnline = [];
    if (this.props.channelsStatusArr) {

      for (var i = 0; i < this.props.channelsStatusArr.length; i++) {
        if (this.props.channelsStatusArr[i].id == "maximilian_dood") {
          console.log("maximilian_dood");
        }
        if (this.props.channelsStatusArr[i] && this.props.channelsStatusArr[i].status != null) {
          if (this.props.channelsStatusArr[i].status.stream && matchesSearchInput(this.props.searchInput, this.props.channelsStatusArr[i])) {
            arrSingleChannelsOnline.push(
              <OnlineChannelSingle channel={this.props.channelsStatusArr[i]} serial={snCount++} key={"arrSingleChannelsOnline" + i} />
            )

          }
        }
      }
    }
// const setOnlineCount = this.props.setOnlineCount - 1;
// setOnlineCount(snCount);
    return (
      <div>
        <Table className="channelTable">
          <tbody>
            {arrSingleChannelsOnline}
          </tbody>
        </Table>
      </div>
      );
  }
}

OnlineChannelsComponent.propTypes = {
  channelsStatusArr: PropTypes.array.isRequired,
  searchInput: PropTypes.string,
  setOnlineCount: PropTypes.func.isRequired
};

export default OnlineChannelsComponent;
