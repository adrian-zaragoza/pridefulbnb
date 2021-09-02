import { connect } from 'react-redux';
import { fetchUserBookings, deleteBookingThunk } from '../../actions/booking_actions';
import BookingIndex from './booking_index';
import { fetchUserReviews } from '../../actions/review_actions';

const mapStateToProps = (state) => {
 console.log("state in booking index container", state)
  return ({
    bookings: state.entities.bookings,
    currentUser: state.session.currentUser,
    userReviews: state.session.userReviews
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchUserBookings: (userId) => dispatch(fetchUserBookings(userId)),
  deleteBookingThunk: (bookingId) => dispatch(deleteBookingThunk(bookingId)),
  fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex)