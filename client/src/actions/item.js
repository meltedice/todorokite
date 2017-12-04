import axios from 'axios'

import * as Item from '../constants/Item'

export const api = axios.create({
  baseURL: 'http://localhost:3010', // FIXME: Move this into config file
  headers: {
    'Content-type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest', // This makes rails to respond in JSON
  },
  timeout: 5000, // [ms]
  responseType: 'json',
})

export const getAllItems = () => dispatch => {
  dispatch(getAllItemsRequest())
  return api.get('/v1/items').then(
    response => {
      dispatch(getAllItemsSuccess(response.data))
    }
  ).catch(
    error => {
      console.error(error)
      dispatch(getAllItemsFailure(error))
    }
  )
}

export const getAllItemsRequest = () => {
  return {
    type: Item.GET_ALL_ITEMS_REQUEST,
  }
}

export const getAllItemsSuccess = (items) => {
  return {
    type: Item.GET_ALL_ITEMS_SUCCESS,
    items,
  }
}

export const getAllItemsFailure = (error) => {
  return {
    type: Item.GET_ALL_ITEMS_FAILURE,
    error,
  }
}

export const addEmptyItem = () => {
  return {
    type: Item.ADD_EMPTY_ITEM,
  }
}

export const createItem = (item) => dispatch => {
  dispatch(createItemRequest(item))
  return api.post('/v1/items', item).then(
    response => {
      dispatch(createItemSuccess(response.data))
    }
  ).catch(
    error => {
      console.error(error)
      dispatch(createItemFailure(error))
    }
  )
}

export const createItemRequest = (item) => {
  return {
    type: Item.CREATE_ITEM_REQUEST,
    item,
  }
}

export const createItemSuccess = (item) => {
  return {
    type: Item.CREATE_ITEM_SUCCESS,
    item,
  }
}

export const createItemFailure = (error) => {
  return {
    type: Item.CREATE_ITEM_FAILURE,
    error,
  }
}
