@reviews.each do |review|
  json.set! review.booking_id do
    json.extract! review, :id, :body, :author_id, :place_id, :booking_id
  end
end