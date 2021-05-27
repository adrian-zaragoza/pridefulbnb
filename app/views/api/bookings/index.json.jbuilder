@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :traveler_id, :place_id, :start_stay, :end_stay
  end
end