import agent from '../agent'

import {
  REQUEST_TODOLISTS,
  RECEIVE_TODOLISTS,
  INVALIDATE_TODOLISTS,
  RESET_FETCHSTATE_ON_FAIL
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

export const resetFetchingStateOnFail = () => {
  return {
    type: RESET_FETCHSTATE_ON_FAIL
  }
}

// retrieve the list of all todolists
export const fetchTodolists = () => {
  return (dispatch,getState) => {
    const token = getState().auth.authtoken
    dispatch(requestTodolists())
    return agent.getTodolists(token)
      .then((json) => {
          dispatch(receiveTodolists(JSON.parse(json.text).reduce((obj, item) => {
            obj[item._id] = item
            return obj
          }, {})))
        }
      ).catch((e) => {
        console.log(e)
        dispatch(resetFetchingStateOnFail())
      })
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