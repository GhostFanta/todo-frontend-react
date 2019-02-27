import {
  ADD_TODO_ITEM_NEW,
  DELETE_TODO_ITEM_NEW,
  UPDATE_TODO_ITEM_NEW
} from '../constants/actionType'
import uuid from 'uuid'

const newlistReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM_NEW:
      return Object.assign({}, state, {
        ...state,
        newtodolist: {
          ...state.newtodolist,
          todos: {
            ...state.todos,
            [uuid()]: {
              content: action.content,
              completed: false
            }
          }
        }
      })
    case DELETE_TODO_ITEM_NEW:
      return Object.assign({}, state, {
        ...state,
        newtodolist: {
          ...state.newtodolist,
          todos: Object.keys(state.todos).reduce((res, k) => {
            if (k !== action.todoid) res[k] = state.todos[k]
            return res
          }, {})
        }
      })
    case UPDATE_TODO_ITEM_NEW:
      return Object.assign({}, state, {
        ...state,
        newtodolist: {
          ...state.newtodolist,
          todos: {
            ...state.todos,
            [action.todoid]: {
              content: action.content,
              completed: false
            }
          }
        }
      })
    default:
      return state
  }
}

export default newlistReducer
