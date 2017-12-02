import reducer from './item'
import * as Item from '../constants/Item'

const initialState = {
  items: [],
}

describe('item reducer', () => {
  describe('initial state', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })
  })

  describe('getAllItemsRequest', () => {
    it('does not change state', () => {
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
          { name: 'TODO 1', note: 'Note for TODO 1' },
          { name: 'TODO 2', note: 'Note for TODO 2' },
          { name: 'TODO 3', note: 'Note for TODO 3' },
        ],
      }

      const actualState = reducer(prevState, action)
      expect(actualState.items).toMatchObject(
        [
          { name: 'TODO 1', note: 'Note for TODO 1' },
          { name: 'TODO 2', note: 'Note for TODO 2' },
          { name: 'TODO 3', note: 'Note for TODO 3' },
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
