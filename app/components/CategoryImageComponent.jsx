import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedOption } from '../actions/selectedOptionsActions';
import styles from '../css/components/CategoryImageStyles.css';
import { MASTER_OPTIONS } from './helpers/MASTER_OPTIONS';
import ImageOptionComponent from './ImageOptionComponent';

import { optionIsSelectedInCategory } from './helpers/categoryHelpers'

// const cx = classNames.bind(styles);

class CategoryImageComponent extends Component {
  constructor(props) {
    super(props);
    this.saveSelectedOptionInStore = this.saveSelectedOptionInStore.bind(this);
  }

  saveSelectedOptionInStore(optionId) {

    const setSelectedOption = this.props.setSelectedOption

    setSelectedOption(MASTER_OPTIONS[this.props.categoryIndex].categoryId, optionId);
  }

  render() {
    let optionsObject = MASTER_OPTIONS
    let currentCategory = MASTER_OPTIONS[this.props.categoryIndex];
    let options = currentCategory.options;

    const selectedOptions = this.props.selectedOptions;

    let imageOptionCompArr = []
    for (var i = 0; i < options.length; i++) {
      let currentImageOption = options[i];



      imageOptionCompArr.push(
        <ImageOptionComponent key={"imageOptionCompArr" + i}
                              option={currentImageOption}
                              className={[styles.testRed, "imageOptionComponentWrapper"].join(' ')}
                              saveSelectedOptionInStore={this.saveSelectedOptionInStore}
                              isSelected={optionIsSelectedInCategory(currentImageOption.optionId, currentCategory.categoryId, this.props.selectedOptions)} />
      )
    }

    return (
      <div>
        <div className={[styles.testBlue, styles.categoryImageWrapper].join(' ')}>
          {imageOptionCompArr}
        </div>
      </div>

    );
  }
}

CategoryImageComponent.propTypes = {
  categoryIndex: PropTypes.number.isRequired,
  selectedOptions: PropTypes.object,
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
    selectedOptions: state.selectedOptions
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, {
  setSelectedOption,
})(CategoryImageComponent);
