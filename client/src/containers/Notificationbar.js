import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Panel from 'react-bootstrap/lib/Panel'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

import * as message from '../actions/message'

class MessagePanel extends Component {
  onDismiss = (event) => {
    const { message, messageActions } = this.props
    messageActions.removeMessage(message.key)
  }

  render() {
    const { message } = this.props
    return (
      <div>
        <span>{message.text}</span>
        <span style={{ float: 'right' }} onClick={this.onDismiss}>
          <Glyphicon glyph='remove' />
        </span>
      </div>
    )
  }
}

class Notificationbar extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    messageActions: PropTypes.object.isRequired,
  }

  handleDismiss = (event) => {
    const { messageActions } = this.props
    messageActions.removeMessage()
  }

  render() {
    const { messages, messageActions } = this.props
    if (messages.length <= 0) return null
    const messagePanels = messages.map(message => {
      const header = <MessagePanel message={message} messageActions={messageActions} />
      return <Panel key={message.key} bsStyle={message.style} header={header} />
    })
    return (
      <div className='notifications'>
        {messagePanels}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  messages: state.message.messages,
})

const mapDispatchToProps = (dispatch) => ({
  messageActions: bindActionCreators(message, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notificationbar)
