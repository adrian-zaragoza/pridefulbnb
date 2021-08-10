json.bookings do
  @bookings.each do |booking|
    json.set! booking.id do
      json.extract! booking, :id, :traveler_id, :place_id, :start_stay, :end_stay
    end
  end
end

json.places do
  @places.each do |place|
    json.set! place.id do
      json.extract! place, :id, :title, :type_of_place, :location
      json.imageUrl url_for(place.images[0])
    end
  end
end

json.reviews do
  @reviews.each do |review|
    json.set! review.booking_id do
      json.extract! review, :id, :body
    end
  end
end

