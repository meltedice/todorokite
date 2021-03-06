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
    mock
      .onGet('/v1/items')
      .reply(200, [
        { id: 1, state: 'active', name: 'TODO 1', note: 'Note for TODO 1' },
        { id: 2, state: 'active', name: 'TODO 2', note: 'Note for TODO 2' },
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
          { id: 1, state: 'active', name: 'TODO 1', note: 'Note for TODO 1' },
          { id: 2, state: 'active', name: 'TODO 2', note: 'Note for TODO 2' },
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
  beforeEach(() => {
    mock
      .onPost('/v1/items', { name: 'TODO 3', note: 'Note for TODO 3' })
      .reply(200, {
        id: 3,
        state: 'active',
        name: 'TODO 3',
        note: 'Note for TODO 3',
      })
  })

  afterEach(() => {
    mock.reset()
  })

  it('sends request then receive response', () => {
    const expectedActions = [
      {
        type: Item.CREATE_ITEM_REQUEST,
        item: { name: 'TODO 3', note: 'Note for TODO 3' },
      },
      {
        type: Item.CREATE_ITEM_SUCCESS,
        item: {
          id: 3,
          state: 'active',
          name: 'TODO 3',
          note: 'Note for TODO 3',
        },
      },
    ]
    const store = mockStore({ items: [] })
    const params = { name: 'TODO 3', note: 'Note for TODO 3' }
    store.dispatch(actions.createItem(params)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('updateItem', () => {
  beforeEach(() => {
    mock
      .onPut(`/v1/items/2`, {
        id: 2,
        name: 'TODO 2 (mod)',
        note: 'Note for TODO 2 (mod)',
      })
      .reply(201, {
        id: 2,
        state: 'active',
        name: 'TODO 2 (mod)',
        note: 'Note for TODO 2 (mod)',
      })
  })

  afterEach(() => {
    mock.reset()
  })

  it('sends request then receive response', () => {
    const expectedActions = [
      {
        type: Item.UPDATE_ITEM_REQUEST,
        item: { id: 2, name: 'TODO 2 (mod)', note: 'Note for TODO 2 (mod)' },
      },
      {
        type: Item.UPDATE_ITEM_SUCCESS,
        item: {
          id: 2,
          state: 'active',
          name: 'TODO 2 (mod)',
          note: 'Note for TODO 2 (mod)',
        },
      },
    ]
    const store = mockStore({ items: [] })
    const params = {
      id: 2,
      name: 'TODO 2 (mod)',
      note: 'Note for TODO 2 (mod)',
    }
    store.dispatch(actions.updateItem(params)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('deleteItem', () => {
  beforeEach(() => {
    mock.onDelete(`/v1/items/4`).reply(204)
  })

  afterEach(() => {
    mock.reset()
  })

  it('sends request then receive response', () => {
    const expectedActions = [
      {
        type: Item.DELETE_ITEM_REQUEST,
        item: { id: 4 },
      },
      {
        type: Item.DELETE_ITEM_SUCCESS,
        item: { id: 4 },
      },
    ]
    const store = mockStore({ items: [] })
    const item = { id: 4 }
    store.dispatch(actions.deleteItem(item)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('completeItem', () => {
  beforeEach(() => {
    mock.onPut(`/v1/items/4/completion`).reply(204)
  })

  afterEach(() => {
    mock.reset()
  })

  it('sends request then receive response', () => {
    const expectedActions = [
      {
        type: Item.COMPLETE_ITEM_REQUEST,
        item: { id: 4 },
      },
      {
        type: Item.COMPLETE_ITEM_SUCCESS,
        item: { id: 4 },
      },
    ]
    const store = mockStore({ items: [] })
    const targetItem = { id: 4 }
    store.dispatch(actions.completeItem(targetItem)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('uncompleteItem', () => {
  beforeEach(() => {
    mock.onDelete(`/v1/items/4/completion`).reply(204)
  })

  afterEach(() => {
    mock.reset()
  })

  it('sends request then receive response', () => {
    const expectedActions = [
      {
        type: Item.UNCOMPLETE_ITEM_REQUEST,
        item: { id: 4 },
      },
      {
        type: Item.UNCOMPLETE_ITEM_SUCCESS,
        item: { id: 4 },
      },
    ]
    const store = mockStore({ items: [] })
    const targetItem = { id: 4 }
    store.dispatch(actions.uncompleteItem(targetItem)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
