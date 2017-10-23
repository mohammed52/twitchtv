import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
// import EntryBox from '../components/EntryBox';
// import MainSection from '../components/MainSection';
// import Scoreboard from '../components/Scoreboard';
import CategoryImageComponent from '../components/CategoryImageComponent';
// import { createTopic, typing, incrementCount, decrementCount, destroyTopic } from '../actions/topics';
import styles from '../css/components/homeStyles';

// const cx = classNames.bind(styles);

class Home extends Component {

  render() {
    let startingIndex = 0;

    return (
      <div>
        <div className={[styles.testOrange, "container-fluid"].join(' ')}>
          <h2 className={[styles.testRed, styles.pageTitle].join(' ')}>Do you have a requirement for Metal Doors?</h2>
          <h3 className={[styles.testBlue, styles.pageTitle].join(' ')}>Select a Door to get Started</h3>
        </div>
        <CategoryImageComponent categoryIndex={startingIndex} />
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
