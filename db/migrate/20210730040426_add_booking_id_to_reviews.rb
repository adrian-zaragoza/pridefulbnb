class AddBookingIdToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :booking_id, :integer, null:false
    add_index :reviews, :booking_id, unique: true
  end
end
