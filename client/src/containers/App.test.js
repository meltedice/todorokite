import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import createHistory from 'history/createMemoryHistory'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import createFinalStore from '../store'
import App from './App'

configure({ adapter: new Adapter() })

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
  })

  it('renders without crashing', () => {
    app()
  })
})
