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
  console.log('removeAuthTokenFromServer')
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
  console.log('logout')
  return (dispatch, getState) => {
    dispatch(requestLogout())
    const token = getState().auth.authtoken
    console.log(token)
    return agent.logout(token).then(
      res => dispatch(removeAuthTokenFromServer())
    ).catch((e) => {
      dispatch(logoutFailed())
      console.log(e)
    })
  }
}

export const signup = () => {
  return agent.signup()
}