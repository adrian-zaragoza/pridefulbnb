class Booking < ApplicationRecord
  validates :traveler_id, :place_id, :start_stay, :end_stay, :num_guests, :total_cost, presence: true
  validate :overlap?

  belongs_to :traveler,
    foreign_key: :traveler_id,
    class_name: "User"

  belongs_to :place,
    foreign_key: :place_id,
    class_name: "Place"

  def overlap?
    this_place = Booking.where(place_id: self.place_id)
    return if this_place.count == 0

    overlap = this_place.where('end_stay > ? AND start_stay < ?', self.start_stay, self.end_stay).count

    if overlap > 0
      self.errors.add(:base, "There is a booking conflict. Please change your dates") 
    end
  end
end
