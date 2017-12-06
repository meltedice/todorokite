class Item < ApplicationRecord
  include AASM

  validates :name, presence: true
  validates :note, presence: true

  aasm column: 'state' do
    state :active, initial: true
    state :done

    event :complete do
      transitions from: :active, to: :done
    end

    event :uncomplete do
      transitions from: :done, to: :active
    end
  end
end
