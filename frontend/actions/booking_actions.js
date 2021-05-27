import * as APIUtil from '../utils/booking_utils';

export const RECEIVE_USER_BOOKINGS = "RECEIVE_USER_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const DELETE_BOOKING = "DELETE_BOOKING";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  booking
})

const receiveUserBookings = (bookings) => ({
  type: RECEIVE_USER_BOOKINGS,
  bookings
})

const deleteBooking = (bookingId) =>({
  type: DELETE_BOOKING,
  bookingId
})

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const fetchUserBookings = (userId) => (dispatch) =>(
  APIUtil.getUserBookings(userId).then(bookings => (dispatch(receiveUserBookings(bookings))))
);

export const createBooking = (booking) => (dispatch) =>(
  APIUtil.createBooking(booking).then(booking =>(dispatch(receiveBooking(booking))), errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const deleteBookingThunk = (bookingId) => (dispatch) => (
  APIUtil.deleteBooking(bookingId).then(() => (dispatch(deleteBooking(bookingId))), errors => (dispatch(receiveErrors(errors.responseJSON))))
);
