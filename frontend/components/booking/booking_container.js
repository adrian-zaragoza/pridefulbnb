import { connect } from 'react-redux';
import Booking from './booking'
import { createBooking } from '../../actions/booking_actions'

const mapStateToProps = (state, ownProps) => {
  return ({
    place: ownProps.place,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => ({
  createBooking: (booking) => dispatch(createBooking(booking))
});

export default connect(mapStateToProps, mapDispatchToProps)(Booking)