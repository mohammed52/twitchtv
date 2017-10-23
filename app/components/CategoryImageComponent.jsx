import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
// import { createTopic, typing, incrementCount, decrementCount, destroyTopic } from '../actions/topics';
import styles from '../css/components/CategoryImageStyles';
import testStyles from '../css/components/testStyles';
import { doorOptionsCategories } from './helpers/doorOptionsCategories';
import ImageOptionComponent from './ImageOptionComponent';

// const cx = classNames.bind(styles);

class CategoryImageComponent extends Component {

  render() {
    let optionsObject = doorOptionsCategories
    let currentCategory = doorOptionsCategories[this.props.categoryIndex];
    let options = currentCategory.options;

    let imageOptionCompArr = []
    for (var i = 0; i < options.length; i++) {
      let currentImageOption = options[i];

      imageOptionCompArr.push(
        <ImageOptionComponent key={"imageOptionCompArr" + i}
                              option={currentImageOption}
                              className={[testStyles.testRed, "imageOptionComponentWrapper"].join(' ')} />
      )
    }

    return (
      <div>
        <div className={[testStyles.testBlue, "categoryImageWrapper"].join(' ')}>
          {imageOptionCompArr}
        </div>
      </div>

    );
  }
}

CategoryImageComponent.propTypes = {
  categoryIndex: PropTypes.number.isRequired,
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
})(CategoryImageComponent);
