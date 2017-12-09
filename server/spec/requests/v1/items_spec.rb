require 'rails_helper'

RSpec.describe "Items", type: :request do
  before(:each) do
    @items = 5.times.map { create(:item) }
  end

  describe "GET /v1/items" do
    it "returns 5 items" do
      get v1_items_path(format: :json)
      expect(response).to have_http_status(200)
      json = JSON.parse(response.body)
      expect(json.size).to eq(5)
    end
  end

  describe "DELETE /v1/items" do
    it "deletes 1 item" do
      item = @items[2]
      expect(Item.count).to eq(5)

      delete v1_item_path(item.id, format: :json)
      expect(response).to have_http_status(204)

      expect(Item.count).to eq(4)
    end
  end

end
