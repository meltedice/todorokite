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
      <div className='item-summary'>
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
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.itemName = undefined
    this.itemNote = undefined
  }

  handleOnCancel = (event) => {
    const { onToggle } = this.props
    onToggle(event)
  }

  handleOnSave = (event) => {
    const { item, onToggle, onSave } = this.props
    const params = {
      id: item.id,
      name: this.itemName.value,
      note: this.itemNote.value,
    }
    onSave(params)
    onToggle(event)
  }

  handleOnDelete = (event) => {
    const { item, onDelete } = this.props
    onDelete(item)
  }

  render() {
    const { item } = this.props
    const header = (
      <div className='item-detail'>
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
          <FormControl type='text' defaultValue={item.name} inputRef={ref => { this.itemName = ref }} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Note</ControlLabel>
          <FormControl componentClass='textarea' defaultValue={item.note} inputRef={ref => { this.itemNote = ref }} />
        </FormGroup>
        <div>
          <ButtonToolbar className='pull-left'>
            <Button onClick={this.handleOnDelete} bsStyle='danger'>
              <Glyphicon glyph='trash' />
            </Button>
          </ButtonToolbar>
          <ButtonToolbar className='pull-right'>
            <Button onClick={this.handleOnCancel}>Cancel</Button>
            <Button onClick={this.handleOnSave} bsStyle='primary'>Save</Button>
          </ButtonToolbar>
        </div>
      </Panel>
    )
  }
}

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  }

  state = {
    status: undefined,
  }

  handleToggle = (event) => {
    event.preventDefault()
    const { status } = this.state
    const nextStatus = status === 'summary' ? 'detail' : 'summary'
    this.setState({ status: nextStatus })
  }

  componentWillMount() {
    const { item } = this.props
    const defaultStatus = item.id ? 'summary' : 'detail'
    this.setState({ status: defaultStatus })
  }

  render() {
    const { item, onSave, onDelete } = this.props
    const { status } = this.state
    return (
      <div className='item'>
        {status === 'summary' ? (
          <ItemSummary item={item} onToggle={this.handleToggle} />
        ) : (
          <ItemDetail item={item} onToggle={this.handleToggle} onSave={onSave} onDelete={onDelete} />
        )}
      </div>
    )
  }
}

export default Item
