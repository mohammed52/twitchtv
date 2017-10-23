import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
// import { createTopic, typing, incrementCount, decrementCount, destroyTopic } from '../actions/topics';
// import styles from '../css/components/ImageOptionStyles';
import styles from '../css/components/ImageOptionStyles';
import { doorOptionsCategories } from './helpers/doorOptionsCategories';
// import optSingleDoor from '../images/doors/optSingleDoor.png';
import MEK from '../images/MEK.png';



class ImageOptionComponent extends Component {

  render() {
    const option = this.props.option;

    return (
      // <div className={cx('vote')}>
      <div>
        <img src={option.imageUrl}
             alt={option.name}
             className={[styles.testBlue].join(' ')} />
      </div>
    );
  }
}

ImageOptionComponent.propTypes = {
  option: PropTypes.object.isRequired
// categoryIndex: PropTypes.number.isRequired,
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
})(ImageOptionComponent);
