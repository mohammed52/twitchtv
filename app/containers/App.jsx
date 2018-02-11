import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// import Navigation from '../containers/Navigation';
// import Message from '../containers/Message';

import OnlineComponent from './OnlineComponent';
import SearchBarComponent from './SearchBarComponent';

import './main.css'
import './App.css';

// import styles from '../css/main';
import MEK from '../images/MEK.png';
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

    this.state = {
      key: 1
    }
  }

  componentDidMount() {

    console.log("AppContainer componentDidMount");

    window.addEventListener('load', this.handleLoad);
    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({
          posts
        });
      });
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
         <div className="App testGreen container">
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
               <OnlineComponent />
             </Tab>
             <Tab eventKey={2}
                  title="Offline"
                  className="singleTab">
               <SearchBarComponent /> Tab 2 content
             </Tab>
             <Tab eventKey={3}
                  title="All"
                  className="singleTab">
               <SearchBarComponent /> Tab 3 content
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
