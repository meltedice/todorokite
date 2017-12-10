import * as Item from '../constants/Item'

const initialState = {
  items: [],
  isLoading: true,
  isLoaded: false,
  isRequesting: false,
  isSuccess: null,
  isFailure: null,
  error: null,
}

const getAllItemsRequest = (state, action) => {
  return {
    ...state,
    isLoading: true,
    isSuccess: null,
    isFailure: null,
    error: null,
  }
}

export const getAllItemsSuccess = (state, action) => {
  const { items } = action
  return { ...state, items, isLoading: false, isLoaded: true }
}

export const getAllItemsFailure = (state, action) => {
  const error = {
    error: action.error,
    type: 'getAll',
  }
  return { ...state, isLoading: false, error }
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
  return { ...state, isRequesting: true, isSuccess: null, isFailure: null }
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
  const error = {
    error: action.error,
    item: action.item,
    type: 'create',
  }
  return { ...state, error, isRequesting: false, isSuccess: false, isFailure: true }
}

const updateItemRequest = (state, action) => {
  // const { item } = action
  return { ...state, isRequesting: true, isSuccess: null, isFailure: null }
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
  const error = {
    error: action.error,
    item: action.item,
    type: 'update',
  }
  return { ...state, error, isRequesting: false, isSuccess: false, isFailure: true }
}

const deleteItemRequest = (state, action) => {
  // const { item } = action
  return { ...state, isRequesting: true, isSuccess: null, isFailure: null }
}

const deleteItemSuccess = (state, action) => {
  const { items } = state
  const { item } = action
  const nextState = {
    ...state,
    items: items.filter(i => i.id !== item.id)
  }
  return nextState
}

const deleteItemFailure = (state, action) => {
  const error = {
    error: action.error,
    item: action.item,
    type: 'delete',
  }
  return { ...state, error, isRequesting: false, isSuccess: false, isFailure: true }
}

const completeItemRequest = (state, action) => {
  return { ...state, isRequesting: true, isSuccess: null, isFailure: null }
}

const completeItemSuccess = (state, action) => {
  const { items } = state
  const { item } = action
  const nextItems = items.map(i => {
    if (i.id !== item.id) return i
    return { ...i, state: 'completed' }
  })
  return {
    ...state,
    items: nextItems,
  }
}

const completeItemFailure = (state, action) => {
  const error = {
    error: action.error,
    item: action.item,
    type: 'complete',
  }
  return { ...state, error, isRequesting: false, isSuccess: false, isFailure: true }
}

const uncompleteItemRequest = (state, action) => {
  return { ...state, isRequesting: true, isSuccess: null, isFailure: null }
}

const uncompleteItemSuccess = (state, action) => {
  const { items } = state
  const { item } = action
  const nextItems = items.map(i => {
    if (i.id !== item.id) return i
    return { ...i, state: 'active' }
  })
  return {
    ...state,
    items: nextItems,
  }
}

const uncompleteItemFailure = (state, action) => {
  const error = {
    error: action.error,
    item: action.item,
    type: 'uncomplete',
  }
  return { ...state, error, isRequesting: false, isSuccess: false, isFailure: true }
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
