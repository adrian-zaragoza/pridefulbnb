json.bookings do
  json.set! @booking.id do
    json.extract! @booking, :id, :traveler_id, :place_id, :start_stay, :end_stay
  end
end

json.places do
  json.set! @place.id do
    json.extract! @place, :id, :title, :type_of_place, :location
    json.imageUrl url_for(@place.images[0])
  end
end