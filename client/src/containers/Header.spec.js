import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import createHistory from 'history/createMemoryHistory'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import createFinalStore from '../store'
import Header from './Header'

configure({ adapter: new Adapter() })

describe('Header', () => {
  let props
  let mountedHeader
  const history = createHistory()
  const store = createFinalStore(history)
  const header = () => {
    if (!mountedHeader) {
      mountedHeader = mount(
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Header {...props} />
          </ConnectedRouter>
        </Provider>
      )
    }
    return mountedHeader
  }

  beforeEach(() => {
    props = {}
    mountedHeader = undefined
  })

  it('renders without crashing', () => {
    header()
  })
})
