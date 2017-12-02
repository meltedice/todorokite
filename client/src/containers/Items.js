import React, { Component } from 'react'
import { connect } from 'react-redux'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'

class Item extends Component {
  render() {
    const { item } = this.props
    const style = { 'textAlign': 'left', width: '80%' }
    return (
      <Button bsStyle='default' style={style}>{item.name}</Button>
    )
  }
}

class Items extends Component {
  render() {
    const { item } = this.props
    // FIXME: Display items on better design/layout
    return (
      <div>
        <Panel header='Inbox' style={{ marginTop: '55px', textAlign: 'left' }}>
          {item.items.map((item, index) => <Item key={index} item={item} />)}
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
