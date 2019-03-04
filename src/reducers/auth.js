import {
  requestLogin,
  requestLogout
} from '../actions/authactions'

import {
  REQUEST_LOGOUT,
  REQUEST_LOGIN,
  RECEIVE_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN
} from '../constants/actionType'

const authReducerInitState = {
  isLoggingin: false,
  authtoken: null
}

const authReducer = (state = authReducerInitState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        isLoggingin: true
      }
    case REQUEST_LOGOUT:
      return {
        isLoggingout: true
      }
    case RECEIVE_AUTH_TOKEN:
      return {
        ...state,
        isLoggingin: false,
        authtoken: action.authtoken
      }
    case REMOVE_AUTH_TOKEN:
      return {
        isLoggingout: false,
        authtoken: null
      }
    default:
      return state
  }
}

export default authReducer