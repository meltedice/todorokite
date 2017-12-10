import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Panel from 'react-bootstrap/lib/Panel'

import * as item from '../actions/item'
import Item from '../components/Item'
import Searchbar from '../components/Searchbar'

// FIXME: Naming...
class ItemList extends Component {
  buildSearchKeywords = (searchQuery) => {
    if (!searchQuery) return null
    const normalizedQuery = searchQuery.trim().toLowerCase()
    return normalizedQuery.split(/ +/)
  }

  createSearchFilter = (searchQuery) => {
    const keywords = this.buildSearchKeywords(searchQuery)
    return (item) => {
      if (!keywords) return true
      const itemName = (item.name || '').toLowerCase()
      return keywords.every(keyword => itemName.includes(keyword))
    }
  }

  buildItemComponents = () => {
    const { items, searchQuery, onCreate, onUpdate, onDelete, onComplete, onUncomplete } = this.props
    const filteredItems = items.filter(this.createSearchFilter(searchQuery))
    return filteredItems.map((item) => {
      const key = item.id || 'empty'
      const onSave = item.id ? onUpdate : onCreate
      const itemProps = { item, onSave, onDelete, onComplete, onUncomplete }
      return <Item key={key} {...itemProps} />
    })
  }

  render() {
    return (
      <Panel header='Inbox' style={{ textAlign: 'left' }}>
        {this.buildItemComponents()}
      </Panel>
    )
  }
}

// FIXME: Naming...
class Items extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    itemActions: PropTypes.object.isRequired,
    searchQuery: PropTypes.string,
  }

  state = {
    searchQuery: undefined,
  }

  onCreate = (item) => {
    const { createItem } = this.props.itemActions
    const { name, note } = item
    const params = { name, note }
    createItem(params)
  }

  onUpdate = (item) => {
    const { updateItem } = this.props.itemActions
    const { id, name, note } = item
    const params = { id, name, note }
    updateItem(params)
  }

  onDelete = (item) => {
    const { deleteItem } = this.props.itemActions
    const { id } = item
    deleteItem(id)
  }

  onComplete = (item) => {
    const { completeItem } = this.props.itemActions
    completeItem(item)
  }

  onUncomplete = (item) => {
    const { uncompleteItem } = this.props.itemActions
    uncompleteItem(item)
  }

  onSearchQueryChange = (searchQuery) => {
    this.setState({ searchQuery })
  }

  render() {
    // FIXME: Display items on better design/layout
    const { items, isLoading } = this.props.item
    // FIXME: Change below more testable
    const searchQuery = this.state.searchQuery || this.props.searchQuery
    return isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <Searchbar onChange={this.onSearchQueryChange} />
        <ItemList
          items={items}
          searchQuery={searchQuery}
          onCreate={this.onCreate}
          onUpdate={this.onUpdate}
          onDelete={this.onDelete}
          onComplete={this.onComplete}
          onUncomplete={this.onUncomplete}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
})

const mapDispatchToProps = (dispatch) => ({
  itemActions: bindActionCreators(item, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items)
