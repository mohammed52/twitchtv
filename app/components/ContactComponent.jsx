import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { setSelectedOption } from '../actions/selectedOptionsActions';
import styles from '../css/components/CategoryContactStyles.css';
import { MASTER_OPTIONS } from './helpers/MASTER_OPTIONS';


class ContactComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      email: "",
      telephone: ""
    }
  }

  render() {



    return (
      <div>
        <div className={[styles.categoryHeader].join(' ')}>
          {this.props.category.categoryHeader}
        </div>
        <div className={[styles.wrapperContactForm].join(' ')}>
          <form role="form" data-toggle="validator" className={[styles.contactForm].join(' ')}>
            <div className="form-group">
              <label className="control-label">
                Focused
              </label>
              <input className="form-control"
                     id="focusedInput"
                     type="text"
                     value="Click to focus..." />
            </div>
            <div className="form-group has-success has-feedback">
              <label className="control-label" htmlFor="inputSuccess">
                Input with success and glyphicon
              </label>
              <input type="text" className={[styles.inputField, "form-control"].join(' ')} id="inputSuccess" />
              <span className="glyphicon glyphicon-ok form-control-feedback"></span>
            </div>
            <div className="form-group has-warning has-feedback">
              <label className="control-label" htmlFor="inputWarning">
                Input with warning and glyphicon
              </label>
              <input type="text" className="form-control" id="inputWarning" />
              <span className="glyphicon glyphicon-warning-sign form-control-feedback"></span>
            </div>
            <div className="form-group has-error has-feedback">
              <label className="control-label" htmlFor="inputError">
                Input with error and glyphicon
              </label>
              <input type="text" className="form-control" id="inputError" />
              <span className="glyphicon glyphicon-remove form-control-feedback"></span>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
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
