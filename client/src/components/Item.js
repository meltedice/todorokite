import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

class ItemSummary extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
  }

  render() {
    const { item, onToggle } = this.props
    const style = { 'textAlign': 'left', width: '80%' }
    const buttonProps = { style, onClick: onToggle }
    return (
      <div>
        <Button {...buttonProps}>{item.name}</Button>
        <ItemToolbox />
      </div>
    )
  }
}

// TODO: Add editor here
class ItemDetail extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
  }

  render() {
    const { item, onToggle } = this.props
    const style = { 'textAlign': 'left', width: '80%' }
    return (
      <div>
        <Button bsStyle='default' style={style} onClick={onToggle}>{item.name} (Detail)</Button>
        <ItemToolbox />
      </div>
    )
  }
}

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  }

  state = {
    status: 'summary',
  }

  handleToggle = (event) => {
    event.preventDefault()
    const { status } = this.state
    const nextStatus = status === 'summary' ? 'detail' : 'summary'
    console.log(`Item: event.target: ${status} ==> ${nextStatus}`)
    console.log(event.target)
    this.setState({ status: nextStatus })
  }

  render() {
    const { item } = this.props
    const { status } = this.state
    return (
      status === 'summary' ? (
        <ItemSummary item={item} onToggle={this.handleToggle} />
      ) : (
        <ItemDetail item={item} onToggle={this.handleToggle} />
      )
    )
  }
}

export default Item
