import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import configureMockStore from 'redux-mock-store'

import createHistory from 'history/createMemoryHistory'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Items from './Items'

const history = createHistory()
const middlewares = [
  routerMiddleware(history),
  thunk,
]
const mockStore = configureMockStore(middlewares)

configure({ adapter: new Adapter() })

describe('Items', () => {
  let initialState
  let props
  let mountedItemsContainer
  const itemsContainer = () => {
    if (!mountedItemsContainer) {
      const store = mockStore(initialState)
      mountedItemsContainer = mount(
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Items {...props} />
          </ConnectedRouter>
        </Provider>
      )
    }
    return mountedItemsContainer
  }

  beforeEach(() => {
    initialState = { item: { items: [] } }
    mountedItemsContainer = undefined
  })

  it('renders without crashing', () => {
    itemsContainer()
  })

  it('has 10 items', () => {
    initialState = {
      item: {
        items: [
          { id: 1,  name: 'abc 001', note: 'Note x' },
          { id: 2,  name: 'bcd 002', note: 'Note x' },
          { id: 3,  name: 'cde 003', note: 'Note x' },
          { id: 4,  name: 'def 004', note: 'Note y' },
          { id: 5,  name: 'efg 005', note: 'Note y' },
          { id: 6,  name: 'fgh 006', note: 'Note y' },
          { id: 7,  name: 'ghi 007', note: 'Note z' },
          { id: 8,  name: 'hij 008', note: 'Note z' },
          { id: 9,  name: 'ijk 009', note: 'Note z' },
          { id: 10, name: 'jkl 010', note: 'Note .' },
        ],
      },
    }
    expect(itemsContainer().find('.item').length).toBe(10)
  })
})
