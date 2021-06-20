![favicon](https://user-images.githubusercontent.com/77212035/115052950-68c42c00-9e93-11eb-96d4-24f761d8fc18.PNG)

[pridefulb&b](https://pridefulbnb.herokuapp.com/#/) is a clone to the hospitality app, misterb&b, where travelers can find LGBTQ+ friendly accommodations to stay while traveling.
![pridefulbnb-homepage](https://github.com/adrian-zaragoza/pridefulbnb/blob/main/app/assets/images/pridefulbnb_homepage.gif)

## Technologies Used
### Frontend
* Javascript
  * A popular programming language that allows users to implement complex features on web pages.
* React/Redux
  * An open-source front-end JavaScript library for building user interfaces or UI components.
* react-dates
  * A responsive and accessible date range picker component built with React.
* CSS/HTML

### Backend
* Ruby
* Ruby on Rails
* PostgreSQL

## Features

### Search Places
1. **Challenge:** Adding search functionality in the homepage and in the nav bar.
  * **Solution:** Used history.replace instead of history.push to update the search places results.
![pridefulbnb-search](https://github.com/adrian-zaragoza/pridefulbnb/blob/main/app/assets/images/pridefulbnb_search.gif)

### Bookings
1. **Challenge:** Verifying the booking request dates are available and not booked previously.
  * **Solution:** Create a validation in the backend to check for any overlap for the place and give an error if there is an overlap.
2. **Challenge:** Adding a dual calendar when the user clicks in the form to add the dates.
 * **Solution:** Utilize react-dates to import a date range picker component and become learn how to implement the calendar in project by refering to the readme.
![pridefulbnb-bookings](https://github.com/adrian-zaragoza/pridefulbnb/blob/main/app/assets/images/pridefulbnb_booking.gif)


# Roadmap
* Travelers who have stayed at a place leave a review.
* Travelers can view the location of the place in Google Maps.
