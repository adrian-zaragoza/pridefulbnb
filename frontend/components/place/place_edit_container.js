import {connect} from 'react-redux';
import { updatePlace } from '../../actions/place_actions';
import PlaceEdit from './place_edit';
import { clearErrors } from '../../actions/session';

const mapStateToProps = (state, ownProps) => {
  return{
    place: ownProps.place,
    editPlaceForm: ownProps.editPlaceForm,
    togglePlaceEdit: ownProps.togglePlaceEdit,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      updatePlace: (place) => dispatch(updatePlace(place)),
      clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceEdit)