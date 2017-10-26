import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import OptionsWrapperContainer from './OptionsWrapperContainer'
import styles from '../css/components/homeStyles';

class Home extends Component {

  render() {

    let startingIndex = 0;

    return (
      <div className={[styles.homeWrapper].join(' ')}>
        <div className={["container-fluid"].join(' ')}>
          <h2 className={[styles.pageTitle].join(' ')}>Get instant quotes for Metal Doors!</h2>
          <h3 className={[styles.pageSubTitle].join(' ')}>Select a Door to get Started</h3>
          <OptionsWrapperContainer />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  // topics: PropTypes.array.isRequired,
  // typing: PropTypes.func.isRequired,
  // createTopic: PropTypes.func.isRequired,
  // destroyTopic: PropTypes.func.isRequired,
  // incrementCount: PropTypes.func.isRequired,
  // decrementCount: PropTypes.func.isRequired,
  // newTopic: PropTypes.string
};

function mapStateToProps(state) {
  return {
    // topics: state.topic.topics,
    // newTopic: state.topic.newTopic
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, {
  // createTopic,
  // typing,
  // incrementCount,
  // decrementCount,
  // destroyTopic
})(Home);
