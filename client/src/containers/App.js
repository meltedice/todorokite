import React, { Component } from 'react'
import {
  withRouter, Route, Switch, Redirect,
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as item from '../actions/item'

import logo from './logo.svg'
import './App.css'

class ItemList extends Component {
  render() {
    return (
      <p className='App-intro'>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    )
  }
}

class App extends Component {
  componentWillMount() {
    const { itemActions } = this.props
    itemActions.getAllItems() // FIXME: Call this from better place
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <Switch>
          <Route exact path='/' render={props => <Redirect to='/items' />} />
          <Route path='/items' component={ItemList} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.routing.location,
  items: state.items,
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  itemActions: bindActionCreators(item, dispatch),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
