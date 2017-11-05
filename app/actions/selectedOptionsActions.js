import { push } from 'react-router-redux';
import { authService } from '../services';

import * as types from '../types';

function setOption(categoryId, optionId, index) {
  return {
    type: types.SAVE_CATEGORY_OPTION,
    data: {
      categoryId,
      optionId,
      index
    }
  };
}

function setContactInfo(yourName, companyName, email, telephone) {
  return {
    type: types.SAVE_CONTACT_INFO,
    data: {
      yourName,
      companyName,
      email,
      telephone,
      categoryId: types.CAT_CONTACT_ID
    }
  }
}

export function setSelectedOption(categoryId, optionId, index) {
  return (dispatch) => {
    dispatch(setOption(categoryId, optionId, index));
  };

}

export function saveOptionsAndContact(yourName, companyName, email, telephone, selectedOptions) {
  return (dispatch) => {

    // return selectedOptionsService().
    dispatch(setContactInfo(yourName, companyName, email, telephone));
  };

}
