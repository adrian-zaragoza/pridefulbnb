import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import placesReducer from './places_reducer';
import bookingsReducer from './bookings_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  places: placesReducer,
  bookings: bookingsReducer,
  reviews: reviewsReducer
})

export default entitiesReducer;