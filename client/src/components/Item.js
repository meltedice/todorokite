import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

class ItemToolbox extends Component {
  handleOnComplete = event => {
    const { item, onComplete } = this.props
    event.stopPropagation() // Stop onToggle
    onComplete(item)
    return false
  }

  handleOnUncomplete = event => {
    const { item, onUncomplete } = this.props
    event.stopPropagation() // Stop onToggle
    onUncomplete(item)
    return false
  }

  render() {
    const { item } = this.props
    const style = {
      display: 'inline-block',
      color: 'gray',
      verticalAlign: 'middle',
      paddingLeft: '10px',
      fontSize: '20px',
    }
    return (
      <div className="pull-right" style={style}>
        {item.state === 'active' ? (
          <Glyphicon glyph="unchecked" onClick={this.handleOnComplete} />
        ) : (
          <Glyphicon glyph="check" onClick={this.handleOnUncomplete} />
        )}
      </div>
    )
  }
}

class ItemSummary extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    onUncomplete: PropTypes.func.isRequired,
  }

  render() {
    const { item, onToggle, onComplete, onUncomplete } = this.props
    const header = (
      <div className="item-summary">
        <span>{item.name}</span>
        <ItemToolbox
          item={item}
          onComplete={onComplete}
          onUncomplete={onUncomplete}
        />
      </div>
    )
    const style = { textAlign: 'left', marginBottom: 0 }
    const panelProps = { header, style, onClick: onToggle }
    return <Panel {...panelProps} />
  }
}

class ItemDetail extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    onUncomplete: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.itemName = undefined
    this.itemNote = undefined
  }

  handleOnCancel = event => {
    const { onToggle } = this.props
    onToggle(event)
  }

  handleOnSave = event => {
    const { item, onToggle, onSave } = this.props
    const params = {
      id: item.id,
      name: this.itemName.value,
      note: this.itemNote.value,
    }
    onSave(params)
    onToggle(event)
  }

  handleOnDelete = event => {
    const { item, onDelete } = this.props
    onDelete(item)
  }

  handleHeaderClick = event => {
    const { onToggle } = this.props
    onToggle(event)
  }

  render() {
    const { item, onComplete, onUncomplete } = this.props
    const header = (
      <div className="item-detail" onClick={this.handleHeaderClick}>
        <span style={{ display: 'inline-block' }}>{item.name}</span>
        <ItemToolbox
          item={item}
          onComplete={onComplete}
          onUncomplete={onUncomplete}
        />
      </div>
    )
    const style = { textAlign: 'left', marginBottom: 0 }
    const panelProps = { header, style }
    return (
      <Panel {...panelProps}>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            defaultValue={item.name}
            inputRef={ref => {
              this.itemName = ref
            }}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Note</ControlLabel>
          <FormControl
            componentClass="textarea"
            defaultValue={item.note}
            inputRef={ref => {
              this.itemNote = ref
            }}
          />
        </FormGroup>
        <div>
          <ButtonToolbar className="pull-left">
            <Button
              onClick={this.handleOnDelete}
              bsStyle="danger"
              disabled={!item.id}
            >
              <Glyphicon glyph="trash" />
            </Button>
          </ButtonToolbar>
          <ButtonToolbar className="pull-right">
            <Button onClick={this.handleOnCancel}>Cancel</Button>
            <Button onClick={this.handleOnSave} bsStyle="primary">
              Save
            </Button>
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
    onComplete: PropTypes.func.isRequired,
    onUncomplete: PropTypes.func.isRequired,
  }

  state = {
    status: undefined,
  }

  handleToggle = event => {
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
    const { item, onSave, onDelete, onComplete, onUncomplete } = this.props
    const { status } = this.state
    return (
      <div className="item">
        {status === 'summary' ? (
          <ItemSummary
            item={item}
            onToggle={this.handleToggle}
            onComplete={onComplete}
            onUncomplete={onUncomplete}
          />
        ) : (
          <ItemDetail
            item={item}
            onToggle={this.handleToggle}
            onSave={onSave}
            onDelete={onDelete}
            onComplete={onComplete}
            onUncomplete={onUncomplete}
          />
        )}
      </div>
    )
  }
}

export default Item
