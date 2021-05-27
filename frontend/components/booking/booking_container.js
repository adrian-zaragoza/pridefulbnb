import { connect } from 'react-redux';
import Booking from './booking'
import { createBooking } from '../../actions/booking_actions'
import { clearErrors } from '../../actions/session';

const mapStateToProps = (state, ownProps) => {
  return ({
    place: ownProps.place,
    currentUser: state.session.currentUser,
    errors: state.errors.session
  });
};

const mapDispatchToProps = (dispatch) => ({
  createBooking: (booking) => dispatch(createBooking(booking)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Booking)