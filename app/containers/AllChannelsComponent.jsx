import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import styles from './OnlineChannels.css';
import OfflineChannelSingle from './OfflineChannelSingle'
import OnlineChannelSingle from './OnlineChannelSingle'
import { matchesSearchInput } from './helpers/matchesSearchInput'

var ReactBootstrap = require('react-bootstrap');

var Table = ReactBootstrap.Table;
var Button = ReactBootstrap.Button;
var Tabs = ReactBootstrap.Tabs;
var Tab = ReactBootstrap.Tab;

class AllChannelsComponent extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    // .status.stream should be !==null , .status.stream.channel.logo, .status.stream.url
    var snCount = 1;

    let arrSingleChannelsAll = [];
    if (this.props.channelsStatusArr) {

      for (var i = 0; i < this.props.channelsStatusArr.length; i++) {

        if (this.props.channelsStatusArr[i] && this.props.channelsStatusArr[i].status != null) {
          if (!this.props.channelsStatusArr[i].status.stream && matchesSearchInput(this.props.searchInput, this.props.channelsStatusArr[i])) {
            arrSingleChannelsAll.push(
              <OfflineChannelSingle channel={this.props.channelsStatusArr[i]} serial={snCount++} key={"arrSingleChannelsAll" + i} />
            )
          } else if (this.props.channelsStatusArr[i] && this.props.channelsStatusArr[i].status != null) {
            if (this.props.channelsStatusArr[i].status.stream && matchesSearchInput(this.props.searchInput, this.props.channelsStatusArr[i])) {
              arrSingleChannelsAll.push(
                <OnlineChannelSingle channel={this.props.channelsStatusArr[i]} serial={snCount++} key={"arrSingleChannelsAll" + i} />
              )
            }
          }
        }
      }
    }
// const setAllChannelsCount = this.props.setAllChannelsCount;
// setAllChannelsCount(snCount - 1);
    return (
      <div>
        <Table>
          <tbody>
            {arrSingleChannelsAll}
          </tbody>
        </Table>
      </div>
      );
  }
}

AllChannelsComponent.propTypes = {
  channelsStatusArr: PropTypes.array.isRequired,
  searchInput: PropTypes.string,
  setAllChannelsCount: PropTypes.func
};

export default AllChannelsComponent;
