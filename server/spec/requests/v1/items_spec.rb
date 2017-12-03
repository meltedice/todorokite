require 'rails_helper'

RSpec.describe "Items", type: :request do
  describe "GET /v1/items" do
    it "works! (now write some real specs)" do
      get v1_items_path(format: :json)
      expect(response).to have_http_status(200)
    end
  end
end
