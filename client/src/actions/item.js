import axios from 'axios'

import * as Item from '../constants/Item'
import settings from '../settings'

export const api = axios.create({
  baseURL: settings.apiUrl,
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

export const updateItem = (item) => dispatch => {
  dispatch(updateItemRequest(item))
  return api.put(`/v1/items/${item.id}`, item).then(
    response => {
      dispatch(updateItemSuccess(response.data))
    }
  ).catch(
    error => {
      console.error(error)
      dispatch(updateItemFailure(error))
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

export const updateItemFailure = (error) => {
  return {
    type: Item.UPDATE_ITEM_FAILURE,
    error,
  }
}

export const deleteItem = (id) => dispatch => {
  dispatch(deleteItemRequest(id))
  return api.delete(`/v1/items/${id}`).then(
    response => {
      dispatch(deleteItemSuccess(id))
    }
  ).catch(
    error => {
      console.error(error)
      dispatch(deleteItemFailure(error))
    }
  )
}

export const deleteItemRequest = (id) => {
  return {
    type: Item.DELETE_ITEM_REQUEST,
    id,
  }
}

export const deleteItemSuccess = (id) => {
  return {
    type: Item.DELETE_ITEM_SUCCESS,
    id,
  }
}

export const deleteItemFailure = (error) => {
  return {
    type: Item.DELETE_ITEM_FAILURE,
    error,
  }
}

export const completeItem = (id) => dispatch => {
  dispatch(completeItemRequest(id))
  return api.put(`/v1/items/${id}/completion`).then(
    response => {
      dispatch(completeItemSuccess(id))
    }
  ).catch(
    error => {
      console.error(error)
      dispatch(completeItemFailure(error))
    }
  )
}

export const completeItemRequest = (id) => {
  return {
    type: Item.COMPLETE_ITEM_REQUEST,
    id,
  }
}

export const completeItemSuccess = (id) => {
  return {
    type: Item.COMPLETE_ITEM_SUCCESS,
    id,
  }
}

export const completeItemFailure = (id, error) => {
  return {
    type: Item.COMPLETE_ITEM_FAILURE,
    id,
    error,
  }
}

export const uncompleteItem = (id) => dispatch => {
  dispatch(uncompleteItemRequest(id))
  return api.delete(`/v1/items/${id}/completion`).then(
    response => {
      dispatch(uncompleteItemSuccess(id))
    }
  ).catch(
    error => {
      console.error(error)
      dispatch(uncompleteItemFailure(id, error))
    }
  )
}

export const uncompleteItemRequest = (id) => {
  return {
    type: Item.UNCOMPLETE_ITEM_REQUEST,
    id,
  }
}

export const uncompleteItemSuccess = (id) => {
  return {
    type: Item.UNCOMPLETE_ITEM_SUCCESS,
    id,
  }
}

export const uncompleteItemFailure = (id, error) => {
  return {
    type: Item.UNCOMPLETE_ITEM_FAILURE,
    id,
    error,
  }
}
