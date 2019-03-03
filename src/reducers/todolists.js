import moment from 'moment'
import uuid from 'uuid'
import {DAY_MONTH_YEAR} from '../constants/formatting'
import {
  // TodoListRelated
  UPDATE_TODO_LIST,
  ADD_TODO_LIST,
  DELETE_TODO_LIST,

  SET_ACTIVE_TODO_LIST,

  // TodoItem related
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  UPDATE_TODO_ITEM,
  TOGGLE_COMPLETED,

  // Api related
  REQUEST_TODOLISTS,
  RECEIVE_TODOLISTS,
  INVALIDATE_TODOLISTS,

  // Visibility
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_INCOMPLETED,
  REMOVE_COMPLETED,
} from '../constants/actionType'
import produce from 'immer'

const listids = ['f9f4f7d0-1777-4b03-8b68-df7359527678',
  'de5c88c7-94a5-488a-9784-975db7e758f0',
  'c561daf0-1ed3-4708-a3ce-3b7fa1878a11']
const todoids = ['24751e44-1084-4874-973f-609c4940205b',
  '9798897d-566f-4f03-89b5-bdd9f342e7a6',
  '693b3acc-4ca0-43ad-9471-da7df5b54c8d',
  '70a5b961-4406-4226-854f-6b774535fa07',
  '5ca5e301-68a8-4f58-93b6-a452ca9e4027']

const todoListsReducerInitState = {
  activelistid: null,
  isFetching: false,
  didInvalidate: true,
  todolists: {
    [listids[0]]: {
      title: 'list1',
      todos: {
        [todoids[0]]: {
          todoid: todoids[0],
          content: 'todo1',
          completed: false
        },
        [todoids[1]]: {
          todoid: todoids[1],
          content: 'todo2',
          completed: true
        },
        [todoids[2]]: {
          todoid: todoids[2],
          content: 'todo3',
          completed: false
        }
      },
      created: moment.utc().format(DAY_MONTH_YEAR),
      modified: moment.utc().format(DAY_MONTH_YEAR),
      visibility: SHOW_ALL
    },
    [listids[1]]: {
      title: 'list2',
      todos: {
        [todoids[3]]: {
          todoid: todoids[3],
          content: 'todo4',
          completed: true
        },
        [todoids[4]]: {
          todoid: todoids[4],
          content: 'todo5',
          completed: true
        }
      },
      created: moment.utc().format(DAY_MONTH_YEAR),
      modified: moment.utc().format(DAY_MONTH_YEAR),
      visibility: SHOW_ALL
    }
  }
}

const todoListsReducer = (state = todoListsReducerInitState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST:
      return {
        ...state,
        todolists: {
          ...state.todolists,
          [uuid()]: {
            title: action.title,
            todos: [],
            created: moment.utc().format(DAY_MONTH_YEAR),
            modified: moment.utc().format(DAY_MONTH_YEAR),
            filter: SHOW_ALL
          }
        }
      }
    case DELETE_TODO_LIST:
      return {
        ...state,
        todolists: Object.keys(state.todolists).reduce((res, k) => {
          if (k !== action.listid) res[k] = state.todolists[k]
          return res
        }, {})
      }
    case UPDATE_TODO_LIST:
      return {
        ...state,
        todolists: {
          ...state.todolists,
          [action.listid]: {
            ...state.todolists[action.listid],
            title: action.title === '' ? state.todolists[action.listid].title : action.title,
            modified: moment.utc().format(DAY_MONTH_YEAR)
          }
        }
      }
    case SET_ACTIVE_TODO_LIST:
      return {
        ...state,
        activelistid: action.listid
      }
    case ADD_TODO_ITEM:
      return {
        ...state,
        todolists: {
          ...state.todolists,
          [action.listid]: {
            ...state.todolists[action.listid],
            todos: {
              ...state.todolists[action.listid].todos,
              [uuid()]: {
                content: action.content,
                completed: false
              }
            }
          }
        }
      }
    case DELETE_TODO_ITEM:
      return {
        ...state,
        todolists: {
          ...state.todolists,
          [action.listid]: {
            ...state.todolists[action.listid],
            todos: Object.keys(state.todolists[action.listid].todos).reduce((res, k) => {
              if (action.todoid !== k) res[k] = state.todolists[action.listid].todos[k]
              return res
            }, {})
          }
        }

      }
    case UPDATE_TODO_ITEM:
      return {
        ...state,
        todolists: {
          ...state.todolists,
          [action.listid]: {
            ...state.todolists[action.listid],
            todos: {
              ...state.todolists[action.listid].todos,
              [action.todoid]: {
                ...state.todolists[action.listid].todos[action.todoid],
                content: action.content
              }
            }
          }
        }
      }
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todolists: {
          ...state.todolists,
          [action.listid]: {
            ...state.todolists[action.listid],
            todos: {
              ...state.todolists[action.listid].todos,
              [action.todoid]: {
                ...state.todolists[action.listid].todos[action.todoid],
                completed: !state.todolists[action.listid].todos[action.todoid].completed
              }
            }
          }
        }

      }
    case SHOW_ALL:
      return {
        ...state,
        todolists: {
          ...state.todolists,
          [action.listid]: {
            ...state.todolists[action.listid],
            visibility: SHOW_ALL
          }
        }

      }
    case SHOW_COMPLETED:
      return {
        ...state,
        todolists: {
          ...state.todolists,
          [action.listid]: {
            ...state.todolists[action.listid],
            visibility: SHOW_COMPLETED
          }
        }
      }
    case SHOW_INCOMPLETED:
      return {
        ...state,
        todolists: {
          ...state.todolists,
          [action.listid]: {
            ...state.todolists[action.listid],
            visibility: SHOW_INCOMPLETED
          }
        }
      }
    case REMOVE_COMPLETED:
      return {
        ...state,
        todolists: {
          ...state.todolists,
          [action.listid]: {
            ...state.todolists[action.listid],
            todos: Object.keys(state.todolists[action.listid].todos).reduce((res, k) => {
              if (state.todolists[action.listid].todos[k].completed !== true) {
                res[k] = state.todolists[action.listid].todos[k]
              }
              return res
            }, {})
          }
        }
      }
    case INVALIDATE_TODOLISTS:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_TODOLISTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_TODOLISTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        todolists: action.todolists
      }
    default:
      return state
  }
}

export default todoListsReducer
