import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Panel from 'react-bootstrap/lib/Panel'

import * as item from '../actions/item'
import Item from '../components/Item'

class Items extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    itemActions: PropTypes.object.isRequired,
    searchQuery: PropTypes.string,
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

  buildSearchKeywords = (searchQuery) => {
    if (!searchQuery) return null
    const normalizedQuery = searchQuery.trim().toLowerCase()
    return normalizedQuery.split(/ +/)
  }

  createSearchFilter = (searchQuery) => {
    const keywords = this.buildSearchKeywords(searchQuery)
    return (item) => {
      if (!keywords) return true
      const itemName = item.name || ''
      return keywords.every(keyword => itemName.includes(keyword))
    }
  }

  buildItemComponents = () => {
    const { item, searchQuery } = this.props
    const filteredItems = item.items.filter(this.createSearchFilter(searchQuery))
    return filteredItems.map((item) => {
      const key = item.id || 'empty'
      const onSave = item.id ? this.onUpdate : this.onCreate
      return <Item key={key} item={item} onSave={onSave} onDelete={this.onDelete} />
    })
  }

  render() {
    // FIXME: Display items on better design/layout
    return (
      <div>
        <Panel header='Inbox' style={{ marginTop: '55px', textAlign: 'left' }}>
          {this.buildItemComponents()}
        </Panel>
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
