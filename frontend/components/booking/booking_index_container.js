import { connect } from 'react-redux';
import { fetchUserBookings, deleteBookingThunk } from '../../actions/booking_actions';
import BookingIndex from './booking_index';

const mapStateToProps = (state) => {
 
  return ({
    bookings: state.entities.bookings,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchUserBookings: (userId) => dispatch(fetchUserBookings(userId)),
  deleteBookingThunk: (bookingId) => dispatch(deleteBookingThunk(bookingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex)