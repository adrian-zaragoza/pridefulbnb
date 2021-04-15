@places.each do |place|
  json.set! place.id do
    json.extract! place, :id, :title, :price_per_day, :type_of_place, :location
  end
end