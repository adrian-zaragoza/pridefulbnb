class Review < ApplicationRecord
  validates :body, :author_id, :place_id, :booking_id, presence: true
  validates :booking_id, uniqueness: true
  
  belongs_to :place,
    foreign_key: :place_id,
    class_name: "Place"

  belongs_to :author,
    foreign_key: :author_id,
    class_name: "User"

  belongs_to :booking,
    foreign_key: :booking_id,
    class_name: "Booking"

end
