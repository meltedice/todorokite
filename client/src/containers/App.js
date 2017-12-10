import React, { Component } from 'react'
import {
  withRouter, Route, Switch, Redirect,
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as item from '../actions/item'
import Header from './Header'
import Items from './Items'

import './App.sass'

// Mock server is required, run by following command:
// drakov -f docs/api.apib --autoOptions -p 3010

class App extends Component {
  componentDidMount() {
    const { itemActions } = this.props
    itemActions.getAllItems()
  }

  render() {
    return (
      <div id='todorokite'>
        <Header />
        <div id='todorokite-body'>
          <Switch>
            <Route exact path='/' render={props => <Redirect to='/items' />} />
            <Route exact path='/items' component={Items} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.routing.location,
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  itemActions: bindActionCreators(item, dispatch),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
