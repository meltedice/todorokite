import React, { Component } from 'react'
import { connect } from 'react-redux'
import Panel from 'react-bootstrap/lib/Panel'

import Item from '../components/Item'

class Items extends Component {
  render() {
    const { item } = this.props
    // FIXME: Display items on better design/layout
    return (
      <div>
        <Panel header='Inbox' style={{ marginTop: '55px', textAlign: 'left' }}>
          {item.items.map((item) => <Item key={item.id || 'empty'} item={item} />)}
        </Panel>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.routing.location,
  item: state.item,
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  // itemActions: bindActionCreators(item, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items)
