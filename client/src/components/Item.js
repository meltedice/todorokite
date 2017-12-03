import React, { Component } from 'react'
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

export default Item
