import agent from '../agent'

import {
  REQUEST_TODOLISTS,
  RECEIVE_TODOLISTS,
  INVALIDATE_TODOLISTS
} from "../constants/actionType";


export const invalidateTodolists = () => {
  return {
    type: INVALIDATE_TODOLISTS
  }
}

export const requestTodolists = () => {
  return {
    type: REQUEST_TODOLISTS
  }
}

export const receiveTodolists = (json) => {
  return {
    type: RECEIVE_TODOLISTS,
    todolists: {
      ...json
    }
  }
}

// retrieve the list of all todolists
export const fetchTodolists = () => {
  return dispatch => {
    dispatch(requestTodolists())
    return agent.getTodolists('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzdhZWNlYjY4ZTU4ODBhNjJjNmNhYTkiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTUxNTU5OTE1fQ.1W54UIuxAoIX1FMd5O_zO9QgrcWxZbSbFErAm6ykTs4')
      .then((json) => {
          dispatch(receiveTodolists(JSON.parse(json.text).reduce((obj, item) => {
            obj[item._id] = item
            return obj
          }, {})))
        }
      )
  }
}

export const shouldFetchTodolists = (state) => {
  const todolists = state.todolists
  if (todolists.isFetching) {
    return false;
  } else {
    return todolists.didInvalidate;
  }
}

export const fetchTodolistIfNeeded = () => {
  console.log('fetch todolist if needed')
  return (dispatch, getState) => {
    if (shouldFetchTodolists(getState())) {
      return dispatch(fetchTodolists())
    }
  }
}

export const deleteTodolist = (token, listid) => {
  return dispatch => {
    agent.deleteTodolist(token, listid)
      .then((doc) => {
        dispatch(invalidateTodolists())
        dispatch(fetchTodolistIfNeeded())
      })
  }
}

export const updateTodolist = (token, listid, body) => {
  return dispatch => {
    agent.updateTodolist(token, listid, body)
      .then((doc) => {
        dispatch(invalidateTodolists())
        dispatch(fetchTodolistIfNeeded())
      })
  }
}

export const createTodolist = (token, body) => {
  return dispatch => {
    agent.createTodoList(token, body)
      .then((doc) => {
        dispatch(invalidateTodolists())
        dispatch(fetchTodolistIfNeeded())
      })
  }
}