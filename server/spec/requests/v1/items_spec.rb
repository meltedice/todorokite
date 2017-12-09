require 'rails_helper'

RSpec.describe "Items", type: :request do
  context 'when 5 items are already created' do
    before(:each) do
      @items = 5.times.map { create(:item) }
    end

    let(:items) { @items }
    let(:headers) { { 'Content-type' => 'application/json' } }

    describe "GET /v1/items" do
      it "returns 5 items" do
        get '/v1/items'
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(json.size).to eq(5)
        expect(json).to match([
          include('state' => 'active', 'name' => 'my name', 'note' => 'my note'),
          include('state' => 'active', 'name' => 'my name', 'note' => 'my note'),
          include('state' => 'active', 'name' => 'my name', 'note' => 'my note'),
          include('state' => 'active', 'name' => 'my name', 'note' => 'my note'),
          include('state' => 'active', 'name' => 'my name', 'note' => 'my note'),
        ])
      end
    end

    describe "POST /v1/items" do
      let(:params) { { name: 'New name', note: 'New note' } }

      it "create an item" do
        post "/v1/items", params: params.to_json, headers: headers

        expect(response).to have_http_status(201)
        json = JSON.parse(response.body)
        expect(json['id']).to_not be_nil
        expect(json).to include('state' => 'active', 'name' => 'New name', 'note' => 'New note')
      end
    end

    context 'with 3rd item' do
      let(:target_item) { items[2] }

      describe "PUT /v1/items/3" do
        it "updates 1 item" do
          current_item = Item.find(target_item.id)
          expect(current_item).to have_attributes(name: 'my name', note: 'my note')

          params = { name: 'Updated name', note: 'Updated note' }.to_json
          put "/v1/items/#{target_item.id}", params: params, headers: headers
          expect(response).to have_http_status(200)

          json = JSON.parse(response.body)
          expect(json).to include('state' => 'active', 'name' => 'Updated name', 'note' => 'Updated note')
          updated_item = Item.find(target_item.id)
          expect(updated_item).to have_attributes(state: 'active', name: 'Updated name', note: 'Updated note')
        end
      end

      describe "PATCH /v1/items/3" do
        it "updates 1 item" do
          current_item = Item.find(target_item.id)
          expect(current_item).to have_attributes(name: 'my name', note: 'my note')

          params = { note: 'Updated note' }.to_json
          patch "/v1/items/#{target_item.id}", params: params, headers: headers
          expect(response).to have_http_status(200)

          json = JSON.parse(response.body)
          expect(json).to include('state' => 'active', 'name' => 'my name', 'note' => 'Updated note')
          updated_item = Item.find(target_item.id)
          expect(updated_item).to have_attributes(name: 'my name', note: 'Updated note')
        end
      end

      describe "DELETE /v1/items/3" do
        it "deletes 1 item" do
          expect(Item.count).to eq(5)

          delete "/v1/items/#{target_item.id}"
          expect(response).to have_http_status(204)

          expect(Item.count).to eq(4)
        end
      end
    end
  end
end
