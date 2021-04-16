@places.each do |place|
  json.set! place.id do
    json.extract! place, :id, :title, :price_per_day, :type_of_place, :location
    json.imageUrl url_for(place.images[0])
  end
end