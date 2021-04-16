class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.string :title, null: false
      t.string :location, null: false
      t.string :type_of_place, null: false
      t.integer :max_guests, null: false
      t.integer :num_of_bedrooms, null: false
      t.integer :num_of_bathrooms, null: false
      t.integer :num_of_beds, null: false
      t.text :about, null:false
      t.text :nearby_attractions
      t.text :rules
      t.integer :price_per_day, null: false
      t.text :cancellation_policy, null: false
      t.string :check_in_from, null: false
      t.string :check_out_before, null: false
      t.integer :owner_id, null: false
      t.timestamps
    end

    add_index :places, :location
    add_index :places, :owner_id
  end
end
