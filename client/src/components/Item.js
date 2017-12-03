import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
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
    <div className='pull-right' style={style}>
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
    const header = (
      <div>
        <span>{item.name}</span>
        <ItemToolbox />
      </div>
    )
    const style = { 'textAlign': 'left', width: '80%', marginBottom: 0 }
    const panelProps = { header, style, onClick: onToggle }
    return (
      <Panel {...panelProps} />
    )
  }
}

class ItemDetail extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
  }

  handleOnCancel = (event) => {
    const { onToggle } = this.props
    onToggle(event)
  }

  handleOnSave = (event) => {
    const { onToggle } = this.props
    // TODO: Call save action
    onToggle(event)
  }

  render() {
    const { item } = this.props
    const header = (
      <div>
        <span style={{ display: 'inline-block' }}>{item.name}</span>
        <ItemToolbox />
      </div>
    )
    const style = { 'textAlign': 'left', width: '80%', marginBottom: 0 }
    const panelProps = { header, style }
    return (
      <Panel {...panelProps}>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl type='text' defaultValue={item.name} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Note</ControlLabel>
          <FormControl componentClass='textarea' defaultValue={item.note} />
        </FormGroup>
        <ButtonToolbar className='pull-right'>
          <Button onClick={this.handleOnCancel}>Cancel</Button>
          <Button onClick={this.handleOnSave} bsStyle='primary'>Save</Button>
        </ButtonToolbar>
      </Panel>
    )
  }
}

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  }

  state = {
    status: undefined,
  }

  handleToggle = (event) => {
    event.preventDefault()
    const { status } = this.state
    const nextStatus = status === 'summary' ? 'detail' : 'summary'
    console.log(`Item: event.target: ${status} ==> ${nextStatus}`)
    console.log(event.target)
    this.setState({ status: nextStatus })
  }

  componentWillMount() {
    const { item } = this.props
    const defaultStatus = item.id ? 'summary' : 'detail'
    this.setState({ status: defaultStatus })
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
