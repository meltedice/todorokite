import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import item from './item'
import message from './message'

const rootReducer = combineReducers({
  item,
  message,
  routing: routerReducer,
})

export default (state, action) => {
  return rootReducer(state, action)
}
