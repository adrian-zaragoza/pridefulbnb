# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Place.delete_all
user1 = User.create!(email: "demouser@demo.com",
            password: "thisisfordemo123", 
            first_name: "Demo",
            last_name: "User",
            birth_date: "1999/05/20",
            current_location: "San Francisco, CA",
            gender: "trans",
            identity: "lgbtq+",
            phone_number: "555-555-5555"
          )

place1 = Place.create!(title: "Sunny Apartment Near Beach",
              location: "Honolulu, Hawaii",
              type_of_place: "Entire Place",
              max_guests: 4,
              num_of_bedrooms: 2,
              num_of_bathrooms: 2,
              num_of_beds: 3,
              about: "If you are visiting from out of state please review travel restrictions prior to booking. We are set up for working from home, and social distancing all while enjoying the Hawaii sun!
                Spacious private apartment with a full kitchen. Pool and Patio areas are very private from the street and neighbors.
                The small garden area in the back is enclosed and private for you to enjoy the garden how ever you like to! Ample street parking available for free.
                Walking distance to Kahala beach and a short drive or uber ride to nearby to Waikiki.",
              nearby_attractions: "Waikiki, Ala Moana Shopping Center, Diamond Head, Kahala Mall, Kahala Hotel, Kahala Beach, Hulas Bar and Lei Stand, Wang Chung's Karaoke Bar, Baccus, InBetween, Scarlet.",
              rules:"Please no smoking and no pets.",
              price_per_day: 150,
              cancellation_policy: "Flexible: Full refund up to 7 days prior to check-in if booked with prepayment at least 10 days before check-in.
                Full refund excludes cancellation fee if booking paid upfront or if booked 9 days or less before check-in and cancelled more than 7 days prior to check-in.
                If cancellation between 6 and 1 day prior to checkin, 50% refund (excluding cancellation fee). No refund if guests interrupt their stay. The cancellation insurance fee is non refundable.",
              check_in_from: "from 1pm to 9pm",
              check_out_before: "10am",
              owner_id: user1.id
)