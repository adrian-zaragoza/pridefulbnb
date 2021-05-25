class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :traveler_id, null: false
      t.integer :place_id, null: false
      t.date :start_stay, null: false
      t.date :end_stay, null: false
      t.integer :num_guests, null: false
      t.integer :total_cost, null: false
      t.timestamps
    end
    add_index :bookings, :traveler_id
    add_index :bookings, :place_id

  end
end
