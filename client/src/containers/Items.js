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
  }

  onCreate = (item) => {
    const { createItem } = this.props.itemActions
    createItem(item)
  }

  onUpdate = (item) => {
    console.log('onUpdate item:')
    console.log(item)
    // const { updateItem } = this.props.itemActions
    // updateItem(item)
  }

  buildItemComponents = () => {
    const { item } = this.props
    return item.items.map((item) => {
      const key = item.id || 'empty'
      const onSave = item.id ? this.onUpdate : this.onCreate
      return <Item key={key} item={item} onSave={onSave} />
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
