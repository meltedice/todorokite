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
  const emptyItem = { state: 'active', name: '', note: '' }
  return { ...state, items: items.concat(emptyItem) }
}

const createItemRequest = (state, action) => {
  // const { item } = action
  return state
}

const createItemSuccess = (state, action) => {
  const { items } = state
  const { item } = action
  const nextItem = { ...item }
  const nextState = {
    ...state,
    items: items.filter(i => i.id).concat(nextItem),
  }
  return nextState
}

const createItemFailure = (state, action) => {
  // const { error } = action
  return state
}

const updateItemRequest = (state, action) => {
  // const { item } = action
  return state
}

const updateItemSuccess = (state, action) => {
  const { items } = state
  const { item } = action
  const nextItem = { ...item }
  const nextState = {
    ...state,
    items: items.map(i => i.id === item.id ? nextItem : i)
  }
  return nextState
}

const updateItemFailure = (state, action) => {
  // const { error } = action
  return state
}

const deleteItemRequest = (state, action) => {
  // const { id } = action
  return state
}

const deleteItemSuccess = (state, action) => {
  const { items } = state
  const { id } = action
  const nextState = {
    ...state,
    items: items.filter(i => i.id !== id)
  }
  return nextState
}

const deleteItemFailure = (state, action) => {
  // const { error } = action
  return state
}

const completeItemRequest = (state, action) => {
  return state
}

const completeItemSuccess = (state, action) => {
  const { items } = state
  const { id } = action
  const nextItems = items.map(item => {
    if (item.id !== id) return item
    return { ...item, state: 'completed' }
  })
  return {
    ...state,
    items: nextItems,
  }
}

const completeItemFailure = (state, action) => {
  return state
}

const uncompleteItemRequest = (state, action) => {
  return state
}

const uncompleteItemSuccess = (state, action) => {
  const { items } = state
  const { id } = action
  const nextItems = items.map(item => {
    if (item.id !== id) return item
    return { ...item, state: 'active' }
  })
  return {
    ...state,
    items: nextItems,
  }
}

const uncompleteItemFailure = (state, action) => {
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
    case Item.UPDATE_ITEM_REQUEST:
      return updateItemRequest(state, action)
    case Item.UPDATE_ITEM_SUCCESS:
      return updateItemSuccess(state, action)
    case Item.UPDATE_ITEM_FAILURE:
      return updateItemFailure(state, action)
    case Item.DELETE_ITEM_REQUEST:
      return deleteItemRequest(state, action)
    case Item.DELETE_ITEM_SUCCESS:
      return deleteItemSuccess(state, action)
    case Item.DELETE_ITEM_FAILURE:
      return deleteItemFailure(state, action)
    case Item.COMPLETE_ITEM_REQUEST:
      return completeItemRequest(state, action)
    case Item.COMPLETE_ITEM_SUCCESS:
      return completeItemSuccess(state, action)
    case Item.COMPLETE_ITEM_FAILURE:
      return completeItemFailure(state, action)
    case Item.UNCOMPLETE_ITEM_REQUEST:
      return uncompleteItemRequest(state, action)
    case Item.UNCOMPLETE_ITEM_SUCCESS:
      return uncompleteItemSuccess(state, action)
    case Item.UNCOMPLETE_ITEM_FAILURE:
      return uncompleteItemFailure(state, action)
    default:
      return state
  }
}
