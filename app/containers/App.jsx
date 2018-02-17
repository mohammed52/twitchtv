import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import axios from 'axios'
// import Navigation from '../containers/Navigation';
// import Message from '../containers/Message';

import OnlineChannelsComponent from './OnlineChannelsComponent';
import OfflineChannelsComponent from './OfflineChannelsComponent';
import AllChannelsComponent from './AllChannelsComponent';
import SearchBarComponent from './SearchBarComponent';

import styles from './main.css'
import AppStyles from './App.css'

import favicon from '../images/favicon.png';
// import MEK from '../images/MEK.png';


var ReactBootstrap = require('react-bootstrap');
var Tabs = ReactBootstrap.Tabs;
var Tab = ReactBootstrap.Tab;

// using SendGrid's v3 Node.js Library

// const cx = classNames.bind(styles);


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
// const App = ({children}) => {
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cssHasLoaded: false,
      searchInput: ""
    }
    this.handleLoad = this.handleLoad.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    // this.setOnlineCount = this.setOnlineCount.bind(this);
    // this.setOfflineCount = this.setOfflineCount.bind(this);
    // this.setAllChannelsCount = this.setAllChannelsCount.bind(this);

    // const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    const channels = ["playoverwatch_kr", "RuneScape", "dreamleague", "nickmercs", "monstercat", "aimbotcalvin", "gsl", "maximilian_dood", "streamerhouse"];
    const tmpChannelsStatusArr = [];

    for (var i = 0; i < channels.length; i++) {
      tmpChannelsStatusArr.push({
        id: channels[i],
        status: null
      })
    }
    this.state = {
      key: 1,
      channelsStatusArr: tmpChannelsStatusArr,
      searchInput: "",
      allChannelsDataReceived: false,
      onlineCount: 0,
      offlineCount: 0,
      allChannelsCount: 0
    }
  }

  componentDidMount() {

    console.log("AppContainer componentDidMount");

    window.addEventListener('load', this.handleLoad);


    var tmpChannelsStatusArr = this.state.channelsStatusArr;
    for (let i = 0; i < this.state.channelsStatusArr.length; i++) {

      axios.get(`https://wind-bow.glitch.me/twitch-api/streams/` + tmpChannelsStatusArr[i].id)
        .then((res) => {
          console.log("response rec", res)
          tmpChannelsStatusArr[i].status = res.data;
          this.setState({
            channelsStatusArr: tmpChannelsStatusArr
          }, function() {
            this.validateChannelsData();
          });
        });
    }
  }

  handleLoad() {
    console.log("handleLoad"); //  $ is available here
    this.setState({
      cssHasLoaded: true
    })
  }

  handleSelect(key) {
    // alert(`selected ${key}`);
    this.setState({
      key
    });
  }

  onSearchInputChange(event) {
    console.log("onSearchInputChange");
    this.setState({
      searchInput: event.target.value
    })
  }
  validateChannelsData() {
    var dataComplete = true;
    for (var j = 0; j < this.state.channelsStatusArr.length; j++) {
      if (!this.state.channelsStatusArr[j].status) {
        dataComplete = false;
        break;
      }
    }
    if (dataComplete) {
      this.setState({
        allChannelsDataReceived: true
      })

      var tmpOnlineCount = 0;
      var tmpOfflineCount = 0;
      var tmpAllChannelsCount = 0;

      for (var i = 0; i < this.state.channelsStatusArr.length; i++) {

        if (this.state.channelsStatusArr[i] && this.state.channelsStatusArr[i].status != null) {
          if (!this.state.channelsStatusArr[i].status.stream) {
            tmpOfflineCount++;

          } else if (this.state.channelsStatusArr[i].status.stream) {
            tmpOnlineCount++;

          }
          tmpAllChannelsCount++;

        }
      }
      this.setState({
        onlineCount: tmpOnlineCount,
        offlineCount: tmpOfflineCount,
        allChannelsCount: tmpAllChannelsCount
      })
    }
  }

  // setOnlineCount(count) {
  //   this.setState({
  //     onlineCount: count
  //   })
  // }

  // setOfflineCount(count) {
  //   this.setState({
  //     offlineCount: count
  //   })
  // }
  // setAllChannelsCount(count) {
  //   this.setState({
  //     allChannelsCount: count
  //   })
  // }

  componentDidUpdate() {
    console.log("AppContainer componentDidUpdate");
  // const ss = document.styleSheets
  // console.log("ss.length", ss.length);
  }

  render() {

    return (
      <div>
        {!this.state.cssHasLoaded ? <div/> :
         <div className="App container">
           <br/>
           <div>
             <Tabs activeKey={this.state.key}
                   onSelect={this.handleSelect}
                   animation={false}
                   id="controlled-tab-example"
                   className="headerTabs testRed">
               <SearchBarComponent searchInput={this.state.searchInput} onSearchInputChange={this.onSearchInputChange} />
               <Tab eventKey={1} title={"Online (" + this.state.onlineCount + ")"} className="singleTab">
                 <OnlineChannelsComponent channelsStatusArr={this.state.channelsStatusArr} searchInput={this.state.searchInput} setOnlineCount={this.setOnlineCount} />
               </Tab>
               <Tab eventKey={2} title={"Offline (" + this.state.offlineCount + ")"} className="singleTab">
                 <OfflineChannelsComponent channelsStatusArr={this.state.channelsStatusArr} searchInput={this.state.searchInput} setOfflineCount={this.setOfflineCount} />
               </Tab>
               <Tab eventKey={3} title={"All (" + this.state.allChannelsCount + ")"} className="singleTab">
                 <AllChannelsComponent channelsStatusArr={this.state.channelsStatusArr} searchInput={this.state.searchInput} setAllChannelsCount={this.setAllChannelsCount} />
               </Tab>
             </Tabs>
           </div>
         </div>}
      </div>
      );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
