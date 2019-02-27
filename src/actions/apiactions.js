import agent from '../agent'

export const assignTodolists = (todolists) => {

}

export const invalidateTodolists = (todolists) => {

}

export const requestTodolists = () => {

}

export const receiveTodolists = (todolists, json) => {

}

export const fetchTodolists = () => {
  return dispatch => {
    dispatch(requestTodolists())
  }
}