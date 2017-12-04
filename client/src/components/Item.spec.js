import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Item from './Item'

configure({ adapter: new Adapter() })

describe('Item', () => {
  it('renders Detail view with a new empty item', () => {
    const item = { name: 'Name:Empty', note: 'Note:Empty' }
    const onSave = jest.fn()
    const itemComponent = mount(<Item item={item} onSave={onSave} />)
    expect(itemComponent.find('.item-summary').exists()).toBeFalsy()
    expect(itemComponent.find('.item-detail').exists()).toBeTruthy()
  })

  it('renders Summary view with a persisted item', () => {
    const item = { id: 9, name: 'Name:Nine', note: 'Note:Nine' }
    const onSave = jest.fn()
    const itemComponent = mount(<Item item={item} onSave={onSave} />)
    expect(itemComponent.find('.item-summary').exists()).toBeTruthy()
    expect(itemComponent.find('.item-detail').exists()).toBeFalsy()
  })
})
