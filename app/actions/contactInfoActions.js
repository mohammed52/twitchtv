import { push } from 'react-router-redux';
import { authService } from '../services';

import * as types from '../types';

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
// function beginLogin() {
//   return {
//     type: types.MANUAL_LOGIN_USER
//   };
// }

// function loginSuccess(message) {
//   return {
//     type: types.LOGIN_SUCCESS_USER,
//     message
//   };
// }

// function loginError(message) {
//   return {
//     type: types.LOGIN_ERROR_USER,
//     message
//   };
// }

// function signUpError(message) {
//   return {
//     type: types.SIGNUP_ERROR_USER,
//     message
//   };
// }

// function beginSignUp() {
//   return {
//     type: types.SIGNUP_USER
//   };
// }

// function signUpSuccess(message) {
//   return {
//     type: types.SIGNUP_SUCCESS_USER,
//     message
//   };
// }

// function beginLogout() {
//   return {
//     type: types.LOGOUT_USER
//   };
// }

// function logoutSuccess() {
//   return {
//     type: types.LOGOUT_SUCCESS_USER
//   };
// }

// function logoutError() {
//   return {
//     type: types.LOGOUT_ERROR_USER
//   };
// }

// export function toggleLoginMode() {
//   return {
//     type: types.TOGGLE_LOGIN_MODE
//   };
// }

// export function manualLogin(data) {
//   return (dispatch) => {
//     dispatch(beginLogin());

//     return authService().login(data)
//       .then((response) => {
//         dispatch(loginSuccess('You have been successfully logged in'));
//         dispatch(push('/'));
//       })
//       .catch((err) => {
//         dispatch(loginError('Oops! Invalid username or password'));
//       });
//   };
// }

// export function signUp(data) {
//   return (dispatch) => {
//     dispatch(beginSignUp());

//     return authService().signUp(data)
//       .then((response) => {
//         dispatch(signUpSuccess('You have successfully registered an account!'));
//         dispatch(push('/'));
//       })
//       .catch((err) => {
//         dispatch(signUpError('Oops! Something went wrong when signing up'));
//       });
//   };
// }

// export function logOut() {
//   return (dispatch) => {
//     dispatch(beginLogout());

//     return authService().logOut()
//       .then((response) => {
//         dispatch(logoutSuccess());
//       })
//       .catch((err) => {
//         dispatch(logoutError());
//       });
//   };
// }

export function saveContactInfo(yourName, companyName, email, telephone) {
  return (dispatch) => {
    dispatch(setContactInfo(yourName, companyName, email, telephone));
  };

}
