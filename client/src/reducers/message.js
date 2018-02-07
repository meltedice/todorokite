import * as Message from '../constants/Message'

const initialState = {
  messages: [],
}

const addMessage = (state, action) => {
  const { messages } = state
  const { message } = action
  const key = Math.random()
    .toString(36)
    .substr(2, 6)
  return { state, messages: messages.concat({ ...message, key }) }
}

const removeMessage = (state, action) => {
  const { messages } = state
  const { key } = action
  return { ...state, messages: messages.filter(message => message.key !== key) }
}

const clearMessages = (state, action) => {
  return initialState
}

export default function item(state = initialState, action) {
  switch (action.type) {
    case Message.ADD_MESSAGE:
      return addMessage(state, action)
    case Message.REMOVE_MESSAGE:
      return removeMessage(state, action)
    case Message.CLEAR_MESSAGES:
      return clearMessages(state, action)
    default:
      return state
  }
}
