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
        <div className={[styles.wrapperContactForm].join(' ')}>
          <form role="form"
                data-toggle="validator"
                className={[styles.contactForm].join(' ')}>
            <div className="form-group">
              <label htmlFor="inputCompanyName">
                Company Name
              </label>
              <input type="text"
                     className={[styles.inputField, "form-control"].join(' ')}
                     id="inputCompanyName"
                     placeholder="My Company Name Pvt Ltd."
                     required/>
            </div>
            <div className="form-group has-success">
              <label htmlFor="exampleInputEmail1">
                Email address
              </label>
              <input type="email"
                     className={[styles.inputField, "form-control form-control-success"].join(' ')}
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="Enter email"
                     data-error="Bruh, that email address is invalid"
                     required/>
              <div className="form-control-feedback">
                Success! You've done it.
              </div>
              <small className="form-text text-muted">Example help text that remains unchanged.</small>
            </div>
            <div className="form-group">
              <label htmlFor="inputTelephone">
                Telephone
              </label>
              <input type="text"
                     className={[styles.inputField, "form-control"].join(' ')}
                     id="inputTelephone"
                     placeholder="+92 313 7590210"
                     required/>
            </div>
            <div className="form-group row has-success">
              <label htmlFor="inputHorizontalSuccess"
                     className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input type="email"
                       className="form-control form-control-success"
                       id="inputHorizontalSuccess"
                       placeholder="name@example.com" />
                <br/>
                <div className="form-control-feedback">
                  Success! You've done it.
                </div>
                <small className="form-text text-muted">Example help text that remains unchanged.</small>
              </div>
            </div>
            <button type="submit"
                    className="btn btn-primary">
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
