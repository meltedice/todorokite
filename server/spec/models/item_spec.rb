require 'rails_helper'

RSpec.describe Item, type: :model do
  context '.save' do
    it 'saves with name and note' do
      item = Item.new(name: 'item name', note: 'item note')
      item.save!
      expect(item).to be_persisted
      expect(item.state).to eq 'active'
    end
  end

  context 'with complete event' do
    it 'changes state to done' do
      item = Item.new(name: 'item name', note: 'item note')
      item.complete
      expect(item.state).to eq 'done'
    end
  end

  context 'with uncomplete event' do
    it 'changes state to active' do
      item = Item.new(name: 'item name', note: 'item note')
      item.complete
      expect(item.state).to eq 'done'
      item.uncomplete
      expect(item.state).to eq 'active'
    end
  end
end
