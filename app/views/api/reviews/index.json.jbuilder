json.set! @place_id do
  json.array! @reviews, :id, :body
end
