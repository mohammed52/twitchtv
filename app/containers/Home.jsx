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
import testStyles from '../css/components/testStyles';

// const cx = classNames.bind(styles);

class Home extends Component {

  render() {
    let startingIndex = 0;
    return (
      <div>
        let's do this
        <div>
          <ul className="categoryImageWrapper">
            <li className="imageOptionComponentWrapper">
              1
            </li>
            <li className="imageOptionComponentWrapper">
              2
            </li>
            <li className="imageOptionComponentWrapper">
              3
            </li>
            <li className="imageOptionComponentWrapper">
              4
            </li>
            <li className="imageOptionComponentWrapper">
              5
            </li>
            <li className="imageOptionComponentWrapper">
              6
            </li>
          </ul>
        </div>
      </div>
    );

  // return (
  //   <div>
  //     <div className={[testStyles.testOrange, "container-fluid"].join(' ')}>
  //       <h2 className={[testStyles.testRed, styles.pageTitle].join(' ')}>Do you have a requirement for Metal Doors?</h2>
  //       <h3 className={[testStyles.testBlue, styles.pageTitle].join(' ')}>Select a Door to get Started</h3>
  //     </div>
  //     <CategoryImageComponent categoryIndex={startingIndex} />
  //   </div>
  // );
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
