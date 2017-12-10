import axios from 'axios'

import * as Item from '../constants/Item'
import settings from '../settings'

export const api = axios.create({
  baseURL: settings.apiUrl,
  headers: {
    'Content-type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest', // This makes rails to respond in JSON
  },
  timeout: 20000, // [ms]
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
      dispatch(createItemFailure(item, error))
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

export const createItemFailure = (item, error) => {
  return {
    type: Item.CREATE_ITEM_FAILURE,
    item,
    error,
  }
}

export const updateItem = (item) => dispatch => {
  dispatch(updateItemRequest(item))
  return api.put(`/v1/items/${item.id}`, item).then(
    response => {
      dispatch(updateItemSuccess(response.data))
    }
  ).catch(
    error => {
      console.error(error)
      dispatch(updateItemFailure(item, error))
    }
  )
}

export const updateItemRequest = (item) => {
  return {
    type: Item.UPDATE_ITEM_REQUEST,
    item,
  }
}

export const updateItemSuccess = (item) => {
  return {
    type: Item.UPDATE_ITEM_SUCCESS,
    item,
  }
}

export const updateItemFailure = (item, error) => {
  return {
    type: Item.UPDATE_ITEM_FAILURE,
    item,
    error,
  }
}

export const deleteItem = (item) => dispatch => {
  dispatch(deleteItemRequest(item))
  return api.delete(`/v1/items/${item.id}`).then(
    response => {
      dispatch(deleteItemSuccess(item))
    }
  ).catch(
    error => {
      console.error(error)
      dispatch(deleteItemFailure(item, error))
    }
  )
}

export const deleteItemRequest = (item) => {
  return {
    type: Item.DELETE_ITEM_REQUEST,
    item,
  }
}

export const deleteItemSuccess = (item) => {
  return {
    type: Item.DELETE_ITEM_SUCCESS,
    item,
  }
}

export const deleteItemFailure = (item, error) => {
  return {
    type: Item.DELETE_ITEM_FAILURE,
    item,
  }
}

export const completeItem = (item) => dispatch => {
  dispatch(completeItemRequest(item))
  return api.put(`/v1/items/${item.id}/completion`).then(
    response => {
      dispatch(completeItemSuccess(item))
    }
  ).catch(
    error => {
      console.error(error)
      dispatch(completeItemFailure(item, error))
    }
  )
}

export const completeItemRequest = (item) => {
  return {
    type: Item.COMPLETE_ITEM_REQUEST,
    item,
  }
}

export const completeItemSuccess = (item) => {
  return {
    type: Item.COMPLETE_ITEM_SUCCESS,
    item,
  }
}

export const completeItemFailure = (item, error) => {
  return {
    type: Item.COMPLETE_ITEM_FAILURE,
    item,
    error,
  }
}

export const uncompleteItem = (item) => dispatch => {
  dispatch(uncompleteItemRequest(item))
  return api.delete(`/v1/items/${item.id}/completion`).then(
    response => {
      dispatch(uncompleteItemSuccess(item))
    }
  ).catch(
    error => {
      console.error(error)
      dispatch(uncompleteItemFailure(item, error))
    }
  )
}

export const uncompleteItemRequest = (item) => {
  return {
    type: Item.UNCOMPLETE_ITEM_REQUEST,
    item,
  }
}

export const uncompleteItemSuccess = (item) => {
  return {
    type: Item.UNCOMPLETE_ITEM_SUCCESS,
    item,
  }
}

export const uncompleteItemFailure = (item, error) => {
  return {
    type: Item.UNCOMPLETE_ITEM_FAILURE,
    item,
    error,
  }
}
