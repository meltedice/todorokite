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

const addEmptyItem = (state, action) => {
  const { items } = state
  const emptyItemExists = !!items.find(item => !item.id)
  if (emptyItemExists) { return state }
  const emptyItem = { name: '', note: '' }
  return { ...state, items: items.concat(emptyItem) }
}

const createItemRequest = (state, action) => {
  // const { item } = action
  return state
}

const createItemSuccess = (state, action) => {
  const { items } = state
  const { item } = action
  const nextState = {
    ...state,
    items: items.map(i => (i.id ? i : item)),
  }
  return nextState
}

const createItemFailure = (state, action) => {
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
    case Item.ADD_EMPTY_ITEM:
      return addEmptyItem(state, action)
    case Item.CREATE_ITEM_REQUEST:
      return createItemRequest(state, action)
    case Item.CREATE_ITEM_SUCCESS:
      return createItemSuccess(state, action)
    case Item.CREATE_ITEM_FAILURE:
      return createItemFailure(state, action)
    default:
      return state
  }
}
