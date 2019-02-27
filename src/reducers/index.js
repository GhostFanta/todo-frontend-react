import { combineReducers } from 'redux'
import todolistsReducer from './todolists'
import newlistReducer from './newlist'

const reducerAll = combineReducers({
  todolists: todolistsReducer,
  newlist: newlistReducer
})

export default reducerAll
