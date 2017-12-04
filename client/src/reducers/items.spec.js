import reducer from './item'
import * as Item from '../constants/Item'

const initialState = {
  items: [],
}

describe('item getAllItems() reducer', () => {
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
          { id: 1, name: 'TODO 1', note: 'Note for TODO 1' },
          { id: 2, name: 'TODO 2', note: 'Note for TODO 2' },
          { id: 3, name: 'TODO 3', note: 'Note for TODO 3' },
        ],
      }

      const actualState = reducer(prevState, action)
      expect(actualState.items).toMatchObject(
        [
          { id: 1, name: 'TODO 1', note: 'Note for TODO 1' },
          { id: 2, name: 'TODO 2', note: 'Note for TODO 2' },
          { id: 3, name: 'TODO 3', note: 'Note for TODO 3' },
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

describe('item createItem() reducer', () => {
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
        item: { id: 4, name: 'TODO 4', note: 'Note for TODO 4' },
      }

      const actualState = reducer(prevState, action)
      expect(actualState.items).toMatchObject(
        [
          { id: 4, name: 'TODO 4', note: 'Note for TODO 4' },
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
