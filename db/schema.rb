# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_30_040426) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "bookings", force: :cascade do |t|
    t.integer "traveler_id", null: false
    t.integer "place_id", null: false
    t.date "start_stay", null: false
    t.date "end_stay", null: false
    t.integer "num_guests", null: false
    t.integer "total_cost", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["place_id"], name: "index_bookings_on_place_id"
    t.index ["traveler_id"], name: "index_bookings_on_traveler_id"
  end

  create_table "places", force: :cascade do |t|
    t.string "title", null: false
    t.string "location", null: false
    t.string "type_of_place", null: false
    t.integer "max_guests", null: false
    t.integer "num_of_bedrooms", null: false
    t.integer "num_of_bathrooms", null: false
    t.integer "num_of_beds", null: false
    t.text "about", null: false
    t.text "nearby_attractions"
    t.text "rules"
    t.integer "price_per_day", null: false
    t.text "cancellation_policy", null: false
    t.string "check_in_from", null: false
    t.string "check_out_before", null: false
    t.integer "owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location"], name: "index_places_on_location"
    t.index ["owner_id"], name: "index_places_on_owner_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "body", null: false
    t.integer "author_id", null: false
    t.integer "place_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "booking_id", null: false
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["booking_id"], name: "index_reviews_on_booking_id", unique: true
    t.index ["place_id"], name: "index_reviews_on_place_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.date "birth_date", null: false
    t.string "current_location", null: false
    t.string "gender", null: false
    t.string "identity", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "phone_number", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
