json.extract! item, :id, :name, :note, :created_at, :updated_at
json.url v1_item_url(item, format: :json)
