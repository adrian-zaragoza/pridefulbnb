import { RECEIVE_USER_BOOKINGS, RECEIVE_BOOKING, DELETE_BOOKING } from '../actions/booking_actions';

const bookingsReducer = ( oldState = {}, action) => {
  Object.freeze(oldState)
  const nextState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_USER_BOOKINGS:
      return Object.assign({}, action.bookings, action.places, oldState);
    // case RECEIVE_BOOKING:
    //   return Object.assign({}, oldState, {[action.booking.booking.id]: action.booking.booking});
    case DELETE_BOOKING:
      return delete nextState[action.bookingId]
    default: 
      return oldState;
  }
}

export default bookingsReducer;