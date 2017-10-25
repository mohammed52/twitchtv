import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { setSelectedOption } from '../actions/selectedOptionsActions';
import styles from '../css/components/CategoryContactStyles.css';
import { MASTER_OPTIONS } from './helpers/MASTER_OPTIONS';


class ContactComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {



    return (
      <div>
        <div className={[styles.categoryHeader].join(' ')}>
          {this.props.category.categoryHeader}
        </div>
        <div className={[styles.label].join(' ')}>
          <label htmlFor="">
            {"Company Name:  "}
          </label>
          <input type="text" />
          <br/>
          <label htmlFor="">
            {"Email:  "}
          </label>
          <input type="text" />
          <br/>
          <label htmlFor="">
            {"Tel:  "}
          </label>
          <input type="text" />
          <br/>
          <button>
            Get Quote!
          </button>
        </div>
      </div>

    );
  }
}

ContactComponent.propTypes = {
  // index: PropTypes.number.isRequired,
  category: PropTypes.object.isRequired


// selectedOptions: PropTypes.object,
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
    // selectedOptions: state.selectedOptions
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, {
  // setSelectedOption,
})(ContactComponent);
