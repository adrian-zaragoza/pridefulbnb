import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import placesReducer from './places_reducer';
import bookingsReducer from './bookings_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  places: placesReducer,
  bookings: bookingsReducer
})

export default entitiesReducer;