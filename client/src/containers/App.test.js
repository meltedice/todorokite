import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import createHistory from 'history/createMemoryHistory'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MockAdapter from 'axios-mock-adapter'

import createFinalStore from '../store'
import App from './App'
import { api } from '../actions/item'

configure({ adapter: new Adapter() })
const mock = new MockAdapter(api)

describe('App', () => {
  let props
  let mountedApp
  const history = createHistory()
  const store = createFinalStore(history)
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App {...props} />
          </ConnectedRouter>
        </Provider>
      )
    }
    return mountedApp
  }

  beforeEach(() => {
    props = {}
    mountedApp = undefined
    mock.reset()
    mock.onGet('/v1/items').reply(200, [
      { name: 'TODO 1', note: 'Note for TODO 1' },
      { name: 'TODO 2', note: 'Note for TODO 2' },
    ])
  })

  it('renders without crashing', () => {
    app()
  })
})
