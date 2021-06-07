require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Place.delete_all
Booking.delete_all
user1 = User.create!(email: "demouser@demo.com",
            password: "thisisfordemo123", 
            first_name: "Demo",
            last_name: "User",
            birth_date: "1999/05/20",
            current_location: "San Francisco, CA",
            gender: "trans",
            identity: "lgbtq+",
            phone_number: "5555555555"
          )

user2 = User.create!(email: "imawizard@hogwarts.com",
            password: "imagryffindor", 
            first_name: "Harry",
            last_name: "Potter",
            birth_date: "1980/07/31",
            current_location: "New York, NY",
            gender: "male",
            identity: "lgbtq+ ally",
            phone_number: "5555555555"
          )

user3 = User.create!(email: "lisa@yahoo.com",
            password: "imasimpson", 
            first_name: "Lisa",
            last_name: "Simpson",
            birth_date: "1995/12/19",
            current_location: "Springfield, NY",
            gender: "female",
            identity: "lgbtq+ ally",
            phone_number: "5555555555"
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

file1 = URI.open('https://pridefulbnb-seeds.s3-us-west-1.amazonaws.com/hawaiihome.jpg')
file2 = URI.open('https://pridefulbnb-seeds.s3-us-west-1.amazonaws.com/hawaiihome2.jpg')
place1.images.attach(io: file1, filename: 'hawaii_home.jpg')
place1.images.attach(io: file2, filename: 'hawaii_home2.jpg')

place2 = Place.create!(title: "Bright 1 BR in Weho",
        type_of_place: "Private room",
        location: "West Hollywood, CA",
        max_guests: 2,
        num_of_bedrooms: 1,
        num_of_bathrooms: 1,
        num_of_beds: 1,
        about: "The apartment is a lovely private apartment in a small building near the vibrant street of Santa Monica Blvd.Apartment is approximately 1000 sq.ft.Living room dining room combo, full use galley - style kitchen, private bathroom and
          balcony at your disposal should you need.The bedroom is comprised of an upgraded memory foam queen size bed, large closet, dresser, desk, storage, linens, towels etc.The bathroom is spacious and available directly adjacent to the room with a split
          floor plan for privacy.Extra storage is available if needed fan provided, a / c available per request and full use of the closets in the bedroom.There is complimentary coffee, tea, water and snacks available as your desire no additional charge.Make yourself at home.",
        nearby_attractions: "",
        rules: "Rules are pretty standard, respect the space and keep it presentable and clean.",
        price_per_day: 89,
        cancellation_policy: "Strict cancellation policy means: 70% refund up to 14 days before confirmed arrival date, then 30% up to 1 day prior to the confirmed check-in date. In both cases, the refund excludes misterb&b service fee paid by the guest and by the host. 
          If the stay is interrupted, the guest will have no right to receive a refund.",
        check_in_from: "from 3pm to 11pm",
        check_out_before: "11am",
        owner_id: user3.id
)

file3 = URI.open('https://pridefulbnb-seeds.s3-us-west-1.amazonaws.com/weho_apartment.jpg')
place2.images.attach(io: file3, filename: 'weho_apartment.jpg')