import { combineReducers } from 'redux'
import {actionTypes} from '../Auth/actions'

// session: {
//   user: null,
//   isAthenticated: false,
//   isAuthenticating: false,
//   error: null,
//   token: null
// }


const user = (state = null, {type, payload}) => {
  switch (type) {
    case actionTypes.SIGN_UP_SUCCESS:
    case actionTypes.SIGN_IN_SUCCESS:
      return payload.user;
    default:
      return state;
  }
};

const isAuthenticated = (state = false, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_UP_SUCCESS:
        case actionTypes.SIGN_IN_SUCCESS:
      return true;
      case actionTypes.SIGN_UP_ERROR:
      case actionTypes.SIGN_IN_ERROR:
      return false;  
  default:
    return state;
  }
}

const token = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_UP_SUCCESS:
    case actionTypes.SIGN_IN_SUCCESS:
      return payload.token;
    case actionTypes.SIGN_UP_ERROR:
    case actionTypes.SIGN_IN_ERROR:      
      return null; 
    default:
      return state;
  }
}


export default combineReducers({
  user,
  token,
  isAuthenticated
});

