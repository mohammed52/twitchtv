import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { setSelectedOption } from '../actions/selectedOptionsActions';
import ImageCategoryComponent from '../components/ImageCategoryComponent';
import ContactComponent from '../components/ContactComponent';
import { MASTER_OPTIONS } from '../components/helpers/MASTER_OPTIONS';
// import loadCategoryComponents from './helpers/loadCategoryComponents';
import styles from '../css/components/CategoryWrapperStyles';
import * as types from '../types';

class OptionsWrapperContainer extends Component {

  constructor(props) {
    super(props)
    this.setSelectedOption = this.setSelectedOption.bind(this);

    let tmpSelectedOptionsArr = []
    for (var i = 0; i < MASTER_OPTIONS.length; i++) {
      tmpSelectedOptionsArr.push({
        isSelected: false,
        categoryId: MASTER_OPTIONS[i].categoryId,
        optionId: null
      })
    }

    this.state = {
      selectedOptions: tmpSelectedOptionsArr,
      totalOptions: MASTER_OPTIONS.length
    }
  }

  componentDidMount() {
    console.log("OptionsWrapperContainer componentDidMount");
  }

  setSelectedOption(categoryId, optionId, index) {

    let tmpSelectedOptionsArr = this.state.selectedOptions

    tmpSelectedOptionsArr[index] = {
      isSelected: true,
      categoryId,
      optionId
    }

    this.setState({
      selectedOptions: tmpSelectedOptionsArr
    })

    const setSelectedOption = this.props.setSelectedOption
    setSelectedOption(categoryId, optionId, index)
  }

  render() {
    // const categoryComponents = loadCategoryComponents(this.state.selectedOptions)
    let categoryComponents = []

    for (var i = 0; i < MASTER_OPTIONS.length; i++) {
      const category = MASTER_OPTIONS[i]
      if (i === 0 || (i > 0 && this.state.selectedOptions[i - 1].isSelected)) {

        switch (category.categoryType) {
          case types.CAT_TYPE_IMAGE_SELECTION: {
            categoryComponents.push(
              <ImageCategoryComponent key={"categoryComponents" + "ImageCategoryComponent" + i}
                                      category={category}
                                      selected={this.state.selectedOptions[i]}
                                      setSelectedOption={this.setSelectedOption}
                                      index={i} />);
            break;
          }
          case types.CAT_TYPE_CONTACT_DETAILS: {
            // if (selectedOptionsArray) {}
            categoryComponents.push(
              <ContactComponent key={"categoryComponents" + "CategoryContactDetailsComponent" + i}
                                category={category} />
            )

          }
          default:
            break;
        }
      }

    }

    return (
      <div>
        <ReactCSSTransitionGroup transitionName={styles}
                                 transitionEnterTimeout={5000}
                                 transitionLeaveTimeout={5000}
                                 transitionAppearTimeout={5000}>
          {categoryComponents}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

OptionsWrapperContainer.propTypes = {
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
  setSelectedOption,
})(OptionsWrapperContainer);
