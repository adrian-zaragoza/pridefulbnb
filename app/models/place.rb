class Place < ApplicationRecord
  validates :title, :location, :type_of_place, :max_guests, :num_of_bedrooms, :num_of_bathrooms,
    :num_of_beds, :about, :price_per_day, :cancellation_policy, :check_in_from, :check_out_before,
    :owner_id, presence: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: "User"
end
