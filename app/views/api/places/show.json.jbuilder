json.set! @place.id do 
  json.extract! @place, :id, :title, :location, :type_of_place, :max_guests, :num_of_bedrooms, 
                                  :num_of_bathrooms, :num_of_beds, :about, :nearby_attractions, :rules,
                                  :price_per_day, :cancellation_policy, :check_in_from, :check_out_before
  json.imageUrl url_for(@place.images)
end