class Item < ApplicationRecord
  include AASM

  validates :name, presence: true
  validates :note, presence: true

  aasm column: 'state' do
    state :active, initial: true
    state :completed

    event :complete do
      transitions from: :active, to: :completed
    end

    event :uncomplete do
      transitions from: :completed, to: :active
    end
  end
end
