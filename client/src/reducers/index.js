import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import item from './item'

const rootReducer = combineReducers({
  item,
  routing: routerReducer,
})

export default (state, action) => {
  return rootReducer(state, action)
}
