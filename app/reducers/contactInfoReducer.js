import { combineReducers } from 'redux';
import * as types from '../types';
import _ from 'lodash';
import MASTER_OPTIONS from '../components/helpers/MASTER_OPTIONS'
import initializeSelectedOptions from './helpers/initializeSelectedOptions'

// const selectedOption = (state = {},
//   action
// ) => {
//   switch (action.type) {
//     case types.SAVE_CONTACT_INFO:
//       if (state.categoryId === action.data.categoryId) {
//         return {
//           ...state,
//           optionId: action.data.optionId,
//           selected: true
//         };
//       }
//       return state;
//     default:
//       return state;
//   }
// }


// const topic = (state = {},
//   action
// ) => {
//   switch (action.type) {
// case types.CREATE_TOPIC_REQUEST:
//   return {
//     id: action.id,
//     count: action.count,
//     text: action.text
//   };
// case types.INCREMENT_COUNT:
//   if (state.id === action.id) {
//     return {
//       ...state,
//       count: state.count + 1
//     };
//   }
//   return state;
// case types.DECREMENT_COUNT:
//   if (state.id === action.id) {
//     return {
//       ...state,
//       count: state.count - 1
//     };
//   }
//   return state;
// default:
//   return state;
//   }
// };

// const topics = (state = [],
//   action
// ) => {
//   switch (action.type) {
// case types.REQUEST_SUCCESS:
//   if (action.data) return action.data;
//   return state;
// case types.CREATE_TOPIC_REQUEST:
//   return [...state, topic(undefined, action)];
// case types.CREATE_TOPIC_FAILURE:
//   return state.filter(t => t.id !== action.id);
// case types.DESTROY_TOPIC:
//   return state.filter(t => t.id !== action.id);
// case types.INCREMENT_COUNT:
// case types.DECREMENT_COUNT:
//   return state.map(t => topic(t, action));
//     default:
//       return state;
//   }
// };



const contactInfo = (state = {},
  action
) => {
  switch (action.type) {
    case types.SAVE_CONTACT_INFO:
      return {
        ...state,
        yourName: action.data.yourName,
        companyName: action.data.companyName,
        email: action.data.email,
        telephone: action.data.telephone
      }
    default:
      return state;
  }


};

// const selectedOptions = combineReducers({
//   selectedOptions
// });

export default contactInfo;
