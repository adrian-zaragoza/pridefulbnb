import {connect} from 'react-redux';
import { createPlace } from '../../actions/place_actions';
import PlaceCreate from './place_create';
import { clearErrors } from '../../actions/session';

const mapStateToProps = (state, ownProps) => {
  return{
    createPlaceForm: ownProps.createPlaceForm,
    togglePlaceCreate: ownProps.togglePlaceCreate,
    errors: state.errors.session,
    currentUser: ownProps.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      createPlace: (place) => dispatch(createPlace(place)),
      clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceCreate)