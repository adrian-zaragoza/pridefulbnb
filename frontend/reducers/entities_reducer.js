import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import placesReducer from './places_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  places: placesReducer
})

export default entitiesReducer;