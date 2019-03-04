import agent from '../agent'
import {
  REQUEST_LOGIN,
  RECEIVE_AUTH_TOKEN,
  LOGIN_FAILED,
  REQUEST_LOGOUT,
  REMOVE_AUTH_TOKEN,
  LOGOUT_FAILED
} from "../constants/actionType";

export const requestLogin = () => {
  return {
    type: REQUEST_LOGIN
  }
}

export const receiveAuthToken = (token) => {
  return {
    type: RECEIVE_AUTH_TOKEN,
    authtoken: token
  }
}

export const loginFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    error: err
  }
}

export const login = (useremail, password) => {
  return dispatch => {
    dispatch(requestLogin())
    return agent.login(useremail, password).then(
      response => dispatch(receiveAuthToken(response.body['token']))
    ).catch((err) => dispatch(loginFailed(err)))
  }
}

export const requestLogout = () => {
  return {
    type: REQUEST_LOGOUT
  }
}

export const removeAuthTokenFromServer = () => {
  return {
    type: REMOVE_AUTH_TOKEN
  }
}

export const logoutFailed = (err) => {
  return {
    type: LOGOUT_FAILED,
    error: err
  }
}

export const logout = () => {
  dispatch(requestlogout())
  return agent.logout().then(
    res => dispatch(removeAuthTokenFromServer()).catch((err) => {
      dispatch(logoutFailed(err))
    })
  )
}

export const signup = () => {
  return agent.signup()
}