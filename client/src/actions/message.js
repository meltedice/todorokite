import * as Message from '../constants/Message'

export const addMessage = message => {
  return {
    type: Message.ADD_MESSAGE,
    message,
  }
}

export const removeMessage = key => {
  return {
    type: Message.REMOVE_MESSAGE,
    key,
  }
}

export const clearMessages = () => {
  return {
    type: Message.CLEAR_MESSAGES,
  }
}
