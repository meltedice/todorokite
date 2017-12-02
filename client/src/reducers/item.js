import * as Item from '../constants/Item'

const initialState = {
  items: [],
}

const getAllItemsRequest = (state, action) => {
  return state
}

export const getAllItemsSuccess = (state, action) => {
  const { items } = action
  return { ...state, items }
}

export const getAllItemsFailure = (state, action) => {
  const { error } = action
  // TODO: Set error info
  console.log('getAllItemsFailure: error')
  console.log(error)
  return state
}

export default function item(state = initialState, action) {
  switch (action.type) {
    case Item.GET_ALL_ITEMS_REQUEST:
      return getAllItemsRequest(state, action)
    case Item.GET_ALL_ITEMS_SUCCESS:
      return getAllItemsSuccess(state, action)
    case Item.GET_ALL_ITEMS_FAILURE:
      return getAllItemsFailure(state, action)
    default:
      return state
  }
}
