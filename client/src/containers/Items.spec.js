import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import createHistory from 'history/createMemoryHistory'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import createFinalStore from '../store'
import Items from './Items'

configure({ adapter: new Adapter() })

describe('Items', () => {
  let props
  let mountedItems
  const history = createHistory()
  const store = createFinalStore(history)
  const items = () => {
    if (!mountedItems) {
      mountedItems = mount(
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Items {...props} />
          </ConnectedRouter>
        </Provider>
      )
    }
    return mountedItems
  }

  beforeEach(() => {
    props = {}
    mountedItems = undefined
  })

  it('renders without crashing', () => {
    items()
  })
})
