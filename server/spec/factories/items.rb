FactoryBot.define do
  factory :item do
    state 'active'
    name 'my name'
    note 'my note'

    factory :active_item do
      state 'active'
    end

    factory :completed_item do
      state 'completed'
    end

    factory :invalid_item do
      state nil
      name nil
      note nil
    end
  end
end
