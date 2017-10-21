import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
// import { createTopic, typing, incrementCount, decrementCount, destroyTopic } from '../actions/topics';
// import styles from '../css/components/ProductCategoryStyles';
import testStyles from '../css/components/testStyles';
import { doorOptionsCategories } from './helpers/doorOptionsCategories';
// import optSingleDoor from '../images/doors/optSingleDoor.png';
import MEK from '../images/MEK.png';

// const optSingleDoor = require('../images/doors/optSingleDoor.png');

// const cx = classNames.bind(styles);

class ImageOptionComponent extends Component {

  render() {
    const option = this.props.option;


    return (
      // <div className={cx('vote')}>
      <div className={[testStyles.testbg2].join(' ')}>
        <div>
          image Url:
        </div>
        <br/>
        {option.imageUrl}
        <br/>
        <div>
          one name
        </div>
        <br/>
        <img src={this.props.option.imageUrl}
             alt={option.name}
             height="300"
             width="300"
             className={[testStyles.testbg3].join(' ')} />
        <br/>
        <div>
          one name
        </div>
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
