import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import item from './item'
import message from './message'

const rootReducer = combineReducers({
  item,
  message,
  routing: routerReducer,
})

const clearNotificationsActionTypes = [
  '@@router/LOCATION_CHANGE',
  'GET_ALL_ITEMS_REQUEST',
]

export default (state, action) => {
  if (clearNotificationsActionTypes.includes(action.type)) {
    // Clear notifications
    state = {
      ...state,
      item: {
        ...state.item,
        isSuccess: null,
        isFailure: null,
      },
      message: { messages: [] },
    }
  }

  return rootReducer(state, action)
}
