import { RECEIVE_USER_BOOKINGS, RECEIVE_BOOKING, DELETE_BOOKING } from '../actions/booking_actions';

const bookingsReducer = ( oldState = {}, action) => {
  Object.freeze(oldState)
  let nextState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_USER_BOOKINGS:
      return Object.assign({}, oldState, action.bookings, action.places );
    // case RECEIVE_BOOKING:
    //   return Object.assign({}, oldState, {"bookings": action.booking.bookings}, {"places": action.booking.places});
    case DELETE_BOOKING:
      delete nextState.bookings[action.bookingId];
      return nextState;
    default: 
      return oldState;
  }
}

export default bookingsReducer;