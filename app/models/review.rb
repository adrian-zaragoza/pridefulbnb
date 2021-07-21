class Review < ApplicationRecord
  validates :body, :author_id, :place_id, presence: true

  belongs_to :place,
    foreign_key: :place_id,
    class_name: "Place"

  belongs_to :author,
    foreign_key: :author_id,
    class_name: "User"

  def valid_review?
    guest = self.author
    place_bookings_count = guest.bookings.where("place_id = ?", self.place_id).count
    
    if place_bookings_count == 0
      self.errors.add(:base, "You first need to stay at this place to leave a review")
      return false
    end
    
    guest_place_reviews_count = Review.where("author_id = ?", self.author_id).count
    
    #Checking if the number of reviewes by the guest for this place is greater than or equal to the number
    #the guest has booked this place, the guest cannot leave another review.
    if guest_place_reviews_count >= place_bookings_count
      self.errors.add(:base, "You already left a review for this place")
      return false
    end

    return true
  end

end
