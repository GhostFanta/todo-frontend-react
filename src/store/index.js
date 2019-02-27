import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducerAll from '../reducers'

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  return createStore(
    reducerAll,
    preloadedState,
    applyMiddleware(
      thunk,
      loggerMiddleware
    )
  )
};