import React, { Component } from 'react'
import { connect } from 'react-redux'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

const ItemToolbox = props => {
  // FIXME: Adjust layout later
  const style = {
    display: 'inline-block',
    color: 'gray',
    verticalAlign: 'middle',
    paddingTop: '5px',
    paddingLeft: '10px',
    fontSize: '20px',
  }
  return (
    <div style={style}>
      <Glyphicon glyph='unchecked' />
    </div>
  )
}

class Item extends Component {
  render() {
    const { item } = this.props
    const style = { 'textAlign': 'left', width: '80%' }
    return (
      <div>
        <Button bsStyle='default' style={style}>{item.name}</Button>
        <ItemToolbox />
      </div>
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
