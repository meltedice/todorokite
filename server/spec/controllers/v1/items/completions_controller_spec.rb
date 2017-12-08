require 'rails_helper'

RSpec.describe V1::Items::CompletionsController, type: :controller do

  before(:each) do
    request.env['HTTP_ACCEPT'] = 'application/json'
  end

  let(:active_item_attributes) {
    { state: 'active', name: 'my name', note: 'my note' }
  }

  let(:completed_item_attributes) {
    { state: 'completed', name: 'my name', note: 'my note' }
  }

  describe "PUT #update" do
    it "returns http success" do
      item = Item.create!(active_item_attributes)
      expect(item).to be_active

      put :update, params: { item_id: item.to_param }
      expect(response).to have_http_status(:success)

      item.reload
      expect(item).to be_completed
    end
  end

  describe "DELETE #destroy" do
    it "returns http success" do
      item = Item.create!(completed_item_attributes)
      expect(item).to be_completed

      delete :destroy, params: { item_id: item.to_param }
      expect(response).to have_http_status(:success)

      item.reload
      expect(item).to be_active
    end
  end

end
