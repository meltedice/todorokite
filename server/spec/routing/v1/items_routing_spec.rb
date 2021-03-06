require "rails_helper"

RSpec.describe V1::ItemsController, type: :routing do
  describe "items routing" do

    it "routes to #index" do
      expect(get: "/v1/items").to route_to("v1/items#index", format: 'json')
    end

    it "routes to #show" do
      expect(get: "/v1/items/1").to route_to("v1/items#show", id: '1', format: 'json')
    end

    it "routes to #create" do
      expect(post: "/v1/items").to route_to("v1/items#create", format: 'json')
    end

    it "routes to #update via PUT" do
      expect(put: "/v1/items/1").to route_to("v1/items#update", id: '1', format: 'json')
    end

    it "routes to #update via PATCH" do
      expect(patch: "/v1/items/1").to route_to("v1/items#update", id: '1', format: 'json')
    end

    it "routes to #destroy" do
      expect(delete: "/v1/items/1").to route_to("v1/items#destroy", id: '1', format: 'json')
    end

    describe "completion routing" do
      it "routes to #update via PUT" do
        expect(put: "/v1/items/1/completion").to route_to("v1/items/completions#update", item_id: '1', format: 'json')
      end

      it "routes to #destroy" do
        expect(delete: "/v1/items/1/completion").to route_to("v1/items/completions#destroy", item_id: '1', format: 'json')
      end
    end
  end
end
