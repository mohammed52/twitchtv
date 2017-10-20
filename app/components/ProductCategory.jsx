import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
// import { createTopic, typing, incrementCount, decrementCount, destroyTopic } from '../actions/topics';
// import styles from '../css/components/ProductCategoryStyles';
import testStyles from '../css/components/testStyles';
// import OptionComponent from ''

// const cx = classNames.bind(styles);

class ProductCategory extends Component {
  render() {
    for (var i = 0; i < this.props.options.length; i++) {
      // this.props.options[i]
    }

    return (
      // <div className={cx('vote')}>
      <div>
        ProductCategory
      </div>
      );
  }
}

ProductCategory.propTypes = {
  options: PropTypes.array.isRequired,
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
})(ProductCategory);
