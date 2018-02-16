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

    let arrSingleChannelsAll = [];
    if (this.props.channelsStatusArr) {
      var snCount = 1;

      for (var i = 0; i < this.props.channelsStatusArr.length; i++) {

        if (this.props.channelsStatusArr[i] && this.props.channelsStatusArr[i].status != null) {
          if (!this.props.channelsStatusArr[i].status.stream && matchesSearchInput(this.props.searchInput, this.props.channelsStatusArr[i])) {
            arrSingleChannelsAll.push(
              <OfflineChannelSingle channel={this.props.channelsStatusArr[i]}
                                    serial={snCount++}
                                    key={"arrSingleChannelsAll" + i} />
            )
          }
        } else if (this.props.channelsStatusArr[i] && this.props.channelsStatusArr[i].status != null) {
          if (this.props.channelsStatusArr[i].status.stream && matchesSearchInput(this.props.searchInput, this.props.channelsStatusArr[i])) {
            arrSingleChannelsAll.push(
              <OnlineChannelSingle channel={this.props.channelsStatusArr[i]}
                                   serial={snCount++}
                                   key={"arrSingleChannelsAll" + i} />
            )
          }
        }
      }
    }
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
  searchInput: PropTypes.string
};

export default AllChannelsComponent;
