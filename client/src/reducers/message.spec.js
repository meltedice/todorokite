import reducer from './message'
import * as Message from '../constants/Message'

const initialState = {
  messages: [],
}

describe('message reducer', () => {
  describe('initial state', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })
  })

  describe('addMessage()', () => {
    it('adds message into messages', () => {
      const prevState = { ...initialState }
      const action = {
        type: Message.ADD_MESSAGE,
        message: { style: 'info', text: 'hello' },
      }

      const actualState = reducer(prevState, action)
      expect(actualState.messages.length).toBe(1)
      expect(actualState.messages).toMatchObject([
        { style: 'info', text: 'hello' },
      ])
    })
  })

  describe('removeMessage()', () => {
    it('removes message from messages', () => {
      const prevState = {
        messages: [
          { key: 'key1', style: 'info', text: 'hello 1' },
          { key: 'key2', style: 'info', text: 'hello 2' },
          { key: 'key3', style: 'info', text: 'hello 3' },
          { key: 'key4', style: 'info', text: 'hello 4' },
        ],
      }
      const action = {
        type: Message.REMOVE_MESSAGE,
        key: 'key2',
      }

      const actualState = reducer(prevState, action)
      expect(actualState.messages.length).toBe(3)
      expect(actualState.messages).toMatchObject([
        { key: 'key1', style: 'info', text: 'hello 1' },
        // { key: 'key2', style: 'info', text: 'hello 2' },
        { key: 'key3', style: 'info', text: 'hello 3' },
        { key: 'key4', style: 'info', text: 'hello 4' },
      ])
    })
  })

  describe('clearMessage()', () => {
    it('clears all messages', () => {
      const prevState = {
        messages: [
          { key: 'key1', style: 'info', text: 'hello 1' },
          { key: 'key2', style: 'info', text: 'hello 2' },
          { key: 'key3', style: 'info', text: 'hello 3' },
          { key: 'key4', style: 'info', text: 'hello 4' },
        ],
      }
      const action = {
        type: Message.CLEAR_MESSAGES,
      }

      const actualState = reducer(prevState, action)
      expect(actualState.messages.length).toBe(0)
      expect(actualState.messages).toMatchObject([])
    })
  })
})
