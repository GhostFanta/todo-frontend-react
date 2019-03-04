import {combineReducers} from 'redux'
import todolistsReducer from './todolists'
import newlistReducer from './newlist'
import authReducer from './auth'

const reducerAll = combineReducers({
  todolists: todolistsReducer,
  newlist: newlistReducer,
  auth: authReducer
})

export default reducerAll
