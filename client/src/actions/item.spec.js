import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from './item'
import * as Item from '../constants/item'

const mock = new MockAdapter(actions.api)
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('getAllItems', () => {
  beforeEach(() => {
    mock.onGet('/v1/items').reply(200, [
      { id: 1, name: 'TODO 1', note: 'Note for TODO 1' },
      { id: 2, name: 'TODO 2', note: 'Note for TODO 2' },
    ])
  })

  afterEach(() => {
    mock.reset()
  })

  it('sends request then receive response', () => {
    const expectedActions = [
      {
        type: Item.GET_ALL_ITEMS_REQUEST,
      },
      {
        type: Item.GET_ALL_ITEMS_SUCCESS,
        items: [
          { id: 1, name: 'TODO 1', note: 'Note for TODO 1' },
          { id: 2, name: 'TODO 2', note: 'Note for TODO 2' },
        ],
      },
    ]
    const store = mockStore({ items: [] })
    store.dispatch(actions.getAllItems()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('createItem', () => {
  const params = { name: 'TODO 3', note: 'Note for TODO 3' }
  const newItem = { id: 3, name: 'TODO 3', note: 'Note for TODO 3' }

  beforeEach(() => {
    mock.onPost('/v1/items', params).reply(200, newItem)
  })

  afterEach(() => {
    mock.reset()
  })

  it('sends request then receive response', () => {
    const expectedActions = [
      {
        type: Item.CREATE_ITEM_REQUEST,
        item: params,
      },
      {
        type: Item.CREATE_ITEM_SUCCESS,
        item: newItem,
      },
    ]
    const store = mockStore({ items: [] })
    store.dispatch(actions.createItem(params)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
