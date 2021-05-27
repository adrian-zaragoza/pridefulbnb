import { connect } from 'react-redux';
import { fetchUserBookings } from '../../actions/booking_actions';
import BookingIndex from './booking_index';

const mapStateToProps = (state) => {
  return ({
    bookings: state.bookings,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchUserBookings: (userId) => dispatch(fetchUserBookings(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex)