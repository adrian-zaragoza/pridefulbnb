class Review < ApplicationRecord
  validates :body, :author_id, :place_id, presence: true

  belongs_to :place,
    foreign_key: :place_id,
    class_name: "Place"

  belongs_to :author,
    foreign_key: :author_id,
    class_name: "User"

  def review_count

  end

  def place_in_bookings?
  end
end
