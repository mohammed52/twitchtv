import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import styles from './OnlineChannels.css';
import OfflineChannelSingle from './OfflineChannelSingle'
import { matchesSearchInput } from './helpers/matchesSearchInput'

var ReactBootstrap = require('react-bootstrap');

var Table = ReactBootstrap.Table;
var Button = ReactBootstrap.Button;
var Tabs = ReactBootstrap.Tabs;
var Tab = ReactBootstrap.Tab;

class OfflineChannelsComponent extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    // .status.stream should be !==null , .status.stream.channel.logo, .status.stream.url

    var snCount = 1;
    let arrSingleChannelsOffline = [];
    if (this.props.channelsStatusArr) {

      for (var i = 0; i < this.props.channelsStatusArr.length; i++) {

        if (this.props.channelsStatusArr[i] && this.props.channelsStatusArr[i].status != null) {
          if (!this.props.channelsStatusArr[i].status.stream && matchesSearchInput(this.props.searchInput, this.props.channelsStatusArr[i])) {
            arrSingleChannelsOffline.push(
              <OfflineChannelSingle channel={this.props.channelsStatusArr[i]}
                                    serial={snCount++}
                                    key={"arrSingleChannelsOffline" + i} />
            )
          }
        }
      }
    }
    // const setOfflineCount = this.props.setOfflineCount;
    // setOfflineCount(snCount - 1);
    return (
      <div>
        <Table className="channelTable">
          <tbody>
            {arrSingleChannelsOffline}
          </tbody>
        </Table>
      </div>
    );
  }
}

OfflineChannelsComponent.propTypes = {
  channelsStatusArr: PropTypes.array.isRequired,
  searchInput: PropTypes.string,
  setOfflineCount: PropTypes.fund
};

export default OfflineChannelsComponent;
