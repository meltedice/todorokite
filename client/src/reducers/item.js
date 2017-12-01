import * as Item from '../constants/Item'

const initialState = {
  items: [],
}

const getAllItemsRequest = (state, action) => {
  console.log('getAllItemsRequest')
  return state
}

export const getAllItemsSuccess = (state, action) => {
  const { items } = action
  console.log('getAllItemsSuccess: items')
  console.log(items)
  return { ...state, items }
}

export const getAllItemsFailure = (state, action) => {
  const { error } = action
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

// export const GET_ALL_ITEMS_REQUEST = 'GET_ALL_ITEMS_REQUEST'
// export const GET_ALL_ITEMS_SUCCESS = 'GET_ALL_ITEMS_SUCCESS'
// export const GET_ALL_ITEMS_FAILURE = 'GET_ALL_ITEMS_FAILURE'

// export const GET_ALL_ITEMS_REQUEST = 'GET_ALL_ITEMS_REQUEST'
// export const GET_ALL_ITEMS_SUCCESS = 'GET_ALL_ITEMS_SUCCESS'
// export const GET_ALL_ITEMS_FAILURE = 'GET_ALL_ITEMS_FAILURE'

