import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function createFinalStore(history) {
  const appliedMiddleware = applyMiddleware(
    routerMiddleware(history),
    thunk
  )
  const enhancer = composeEnhancers(appliedMiddleware)

  return createStore(rootReducer, enhancer)
}
