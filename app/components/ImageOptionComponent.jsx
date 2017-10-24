import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
// import { createTopic, typing, incrementCount, decrementCount, destroyTopic } from '../actions/topics';
// import styles from '../css/components/ImageOptionStyles';
import styles from '../css/components/ImageOptionStyles';
import { MASTER_OPTIONS } from './helpers/MASTER_OPTIONS';
// import optSingleDoor from '../images/doors/optSingleDoor.png';
import MEK from '../images/MEK.png';



class ImageOptionComponent extends Component {
  constructor(props) {
    super(props)
    this.saveOption = this.saveOption.bind(this)
  }
  saveOption() {
    // console.log("saveOption: " + this.props.option.optionId);
    const saveSelectedOptionInStore = this.props.saveSelectedOptionInStore

    saveSelectedOptionInStore(this.props.option.optionId)
  }

  render() {
    const option = this.props.option;

    return (
      // <div className={cx('vote')}>
      <div className={[styles.ImageOptionWrapper, styles.testRed].join(' ')} onClick={this.saveOption}>
        <img src={option.imageUrl} alt={option.name} className={[styles.opionImage, styles.testBlue, 'img-responsive'].join(' ')} />
        <div className={[styles.headerText].join(' ')}>
          {option.headerText}
        </div>
        <div className={[styles.subHeaderText].join(' ')}>
          {option.subHeaderText}
        </div>
      </div>
      );
  }
}

ImageOptionComponent.propTypes = {
  option: PropTypes.object.isRequired,
  saveSelectedOptionInStore: PropTypes.func.isRequired,
// categoryIndex: PropTypes.number.isRequired,
// topics: PropTypes.array.isRequired,
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
