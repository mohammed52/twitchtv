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
      cssHasLoaded: false
    }
    this.handleLoad = this.handleLoad.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    const tmpChannelsStatusArr = [];

    for (var i = 0; i < channels.length; i++) {
      tmpChannelsStatusArr.push({
        id: channels[i],
        status: null
      })
    }
    this.state = {
      key: 1,
      channelsStatusArr: tmpChannelsStatusArr
    }
  }

  componentDidMount() {

    console.log("AppContainer componentDidMount");

    window.addEventListener('load', this.handleLoad);


    var tmpChannelsStatusArr = this.state.channelsStatusArr;
    for (let i = 0; i < this.state.channelsStatusArr.length - 1; i++) {

      axios.get(`https://wind-bow.glitch.me/twitch-api/streams/` + tmpChannelsStatusArr[i].id)
        .then((res) => {
          console.log("response rec", res)
          tmpChannelsStatusArr[i].status = res.data;
          this.setState({
            channelsStatusArr: tmpChannelsStatusArr
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
  componentDidUpdate() {
    console.log("AppContainer componentDidUpdate");
  // const ss = document.styleSheets
  // console.log("ss.length", ss.length);
  }

  render() {

    return (
      <div>
        {!this.state.cssHasLoaded ? <div/> :
         <div className="container red myclass red2">
           Twitch Tv
           <br/>
           <br/>
           <Tabs activeKey={this.state.key}
                 onSelect={this.handleSelect}
                 animation={false}
                 id="controlled-tab-example"
                 className="headerTabs testRed">
             <Tab eventKey={1}
                  title="Online"
                  className="singleTab">
               <SearchBarComponent />
               <OnlineChannelsComponent channelsStatusArr={this.state.channelsStatusArr} />
             </Tab>
             <Tab eventKey={2}
                  title="Offline"
                  className="singleTab">
               <SearchBarComponent />
               <OfflineChannelsComponent channelsStatusArr={this.state.channelsStatusArr} />
             </Tab>
             <Tab eventKey={3}
                  title="All"
                  className="singleTab">
               <SearchBarComponent />
               <AllChannelsComponent channelsStatusArr={this.state.channelsStatusArr} />
             </Tab>
           </Tabs>
         </div>}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
