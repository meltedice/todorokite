import reducer from './item'
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

describe('item reducer: getAllItems()', () => {
  describe('initial state', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })
  })

  describe('getAllItemsRequest', () => {
    it('does not change state (yet)', () => {
      const prevState = { ...initialState }
      const action = {
        type: Item.GET_ALL_ITEMS_REQUEST,
      }
      const actualState = reducer(prevState, action)
      expect(actualState.items).toMatchObject([])
    })
  })

  describe('getAllItemsSuccess', () => {
    it('sets items array', () => {
      const prevState = { ...initialState }
      const action = {
        type: Item.GET_ALL_ITEMS_SUCCESS,
        items: [
          { id: 1, state: 'active', name: 'TODO 1', note: 'Note for TODO 1' },
          { id: 2, state: 'active', name: 'TODO 2', note: 'Note for TODO 2' },
          { id: 3, state: 'active', name: 'TODO 3', note: 'Note for TODO 3' },
        ],
      }

      const actualState = reducer(prevState, action)
      expect(actualState.items).toMatchObject(
        [
          { id: 1, state: 'active', name: 'TODO 1', note: 'Note for TODO 1' },
          { id: 2, state: 'active', name: 'TODO 2', note: 'Note for TODO 2' },
          { id: 3, state: 'active', name: 'TODO 3', note: 'Note for TODO 3' },
        ]
      )
    })
  })

  xdescribe('getAllItemsFailure', () => {
    it('sets error info', () => {
      // TODO: Tests will be here
    })
  })
})

describe('item reducer: createItem()', () => {
  describe('createItemRequest', () => {
    it('does not change state (yet)', () => {
      const prevState = { ...initialState }
      const action = {
        type: Item.CREATE_ITEM_REQUEST,
      }
      const actualState = reducer(prevState, action)
      expect(actualState.items).toMatchObject([])
    })
  })

  describe('createItemSuccess', () => {
    it('appends new item to items array', () => {
      const prevState = { ...initialState }
      const action = {
        type: Item.CREATE_ITEM_SUCCESS,
        item: { id: 4, state: 'active', name: 'TODO 4', note: 'Note for TODO 4' },
      }

      const actualState = reducer(prevState, action)
      expect(actualState.items).toMatchObject(
        [
          { id: 4, state: 'active', name: 'TODO 4', note: 'Note for TODO 4' },
        ]
      )
    })
  })

  xdescribe('createItemFailure', () => {
    it('sets error info', () => {
      // TODO: Tests will be here
    })
  })
})

describe('item reducer: updateItem()', () => {
  const prevState = {
    items: [
      { id: 4, state: 'active', name: 'TODO 4', note: 'Note for TODO 4' },
      { id: 5, state: 'active', name: 'TODO 5', note: 'Note for TODO 5' },
    ],
  }

  describe('updateItemRequest', () => {
    it('does not change state (yet)', () => {
      const action = {
        type: Item.UPDATE_ITEM_REQUEST,
      }
      const actualState = reducer(prevState, action)
      expect(actualState.items).toMatchObject(prevState.items)
    })
  })

  describe('updateItemSuccess', () => {
    it('appends new item to items array', () => {
      const action = {
        type: Item.UPDATE_ITEM_SUCCESS,
        item: { id: 4, state: 'active', name: 'TODO 4x', note: 'Note for TODO 4x' },
      }

      const actualState = reducer(prevState, action)
      expect(actualState.items).toMatchObject(
        [
          { id: 4, state: 'active', name: 'TODO 4x', note: 'Note for TODO 4x' },
          { id: 5, state: 'active', name: 'TODO 5', note: 'Note for TODO 5' },
        ]
      )
    })
  })

  xdescribe('updateItemFailure', () => {
    it('sets error info', () => {
      // TODO: Tests will be here
    })
  })
})

describe('item reducer: deleteItem()', () => {
  const prevState = {
    items: [
      { id: 3, state: 'active', name: 'TODO 3', note: 'Note for TODO 3' },
      { id: 4, state: 'active', name: 'TODO 4', note: 'Note for TODO 4' },
      { id: 5, state: 'active', name: 'TODO 5', note: 'Note for TODO 5' },
    ],
  }

  describe('deleteItemRequest', () => {
    it('does not change state (yet)', () => {
      const action = {
        type: Item.DELETE_ITEM_REQUEST,
        id: 4,
      }
      const actualState = reducer(prevState, action)
      expect(actualState.items).toMatchObject(prevState.items)
    })
  })

  describe('deleteItemSuccess', () => {
    it('removes an item from items array', () => {
      const action = {
        type: Item.DELETE_ITEM_SUCCESS,
        id: 4,
      }

      const actualState = reducer(prevState, action)
      expect(actualState.items).toMatchObject(
        [
          { id: 3, state: 'active', name: 'TODO 3', note: 'Note for TODO 3' },
          { id: 5, state: 'active', name: 'TODO 5', note: 'Note for TODO 5' },
        ]
      )
    })
  })

  xdescribe('deleteItemFailure', () => {
    it('sets error info', () => {
      // TODO: Tests will be here
    })
  })
})

describe('item reducer: completeItem()', () => {
  const prevState = {
    items: [
      { id: 3, state: 'active', name: 'TODO 3', note: 'Note for TODO 3' },
      { id: 4, state: 'active', name: 'TODO 4', note: 'Note for TODO 4' },
      { id: 5, state: 'active', name: 'TODO 5', note: 'Note for TODO 5' },
    ],
  }

  describe('completeItemRequest', () => {
    it('does not change state (yet)', () => {
      const action = {
        type: Item.COMPLETE_ITEM_REQUEST,
        id: 4,
      }
      const actualState = reducer(prevState, action)
      expect(actualState.items).toMatchObject(prevState.items)
    })
  })

  describe('completeItemSuccess', () => {
    it('removes an item from items array', () => {
      const action = {
        type: Item.COMPLETE_ITEM_SUCCESS,
        id: 4,
      }

      const actualState = reducer(prevState, action)
      expect(actualState.items).toMatchObject(
        [
          { id: 3, state: 'active',    name: 'TODO 3', note: 'Note for TODO 3' },
          { id: 4, state: 'completed', name: 'TODO 4', note: 'Note for TODO 4' },
          { id: 5, state: 'active',    name: 'TODO 5', note: 'Note for TODO 5' },
        ]
      )
    })
  })

  xdescribe('completeItemFailure', () => {
    it('sets error info', () => {
      // TODO: Tests will be here
    })
  })
})

describe('item reducer: uncompleteItem()', () => {
  const prevState = {
    items: [
      { id: 3, state: 'active',    name: 'TODO 3', note: 'Note for TODO 3' },
      { id: 4, state: 'completed', name: 'TODO 4', note: 'Note for TODO 4' },
      { id: 5, state: 'active',    name: 'TODO 5', note: 'Note for TODO 5' },
    ],
  }

  describe('uncompleteItemRequest', () => {
    it('does not change state (yet)', () => {
      const action = {
        type: Item.UNCOMPLETE_ITEM_REQUEST,
        id: 4,
      }
      const actualState = reducer(prevState, action)
      expect(actualState.items).toMatchObject(prevState.items)
    })
  })

  describe('uncompleteItemSuccess', () => {
    it('removes an item from items array', () => {
      const action = {
        type: Item.UNCOMPLETE_ITEM_SUCCESS,
        id: 4,
      }

      const actualState = reducer(prevState, action)
      expect(actualState.items).toMatchObject(
        [
          { id: 3, state: 'active', name: 'TODO 3', note: 'Note for TODO 3' },
          { id: 4, state: 'active', name: 'TODO 4', note: 'Note for TODO 4' },
          { id: 5, state: 'active', name: 'TODO 5', note: 'Note for TODO 5' },
        ]
      )
    })
  })

  xdescribe('uncompleteItemFailure', () => {
    it('sets error info', () => {
      // TODO: Tests will be here
    })
  })
})
