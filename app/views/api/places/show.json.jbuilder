json.place do 
  json.extract! @place, :id, :title, :location, :type_of_place, :max_guests, :num_of_bedrooms, 
                                  :num_of_bathrooms, :num_of_beds, :about, :nearby_attractions, :rules,
                                  :price_per_day, :cancellation_policy, :check_in_from, :check_out_before, :owner_id
  json.imageUrl @place.images.map {|image| url_for(image)}
  json.ownerFirstName @place.owner.first_name

  json.reviews do
    json.array! @place.reviews, partial: '/api/reviews/review', as: :review
  end

end