import {connect} from 'react-redux';
import { updatePlace } from '../../actions/place_actions';
import PlaceEdit from './place_edit';

const mapStateToProps = (state, ownProps) => {

  return{
    place: ownProps.place,
    editPlaceForm: ownProps.editPlaceForm,
    togglePlaceEdit: ownProps.togglePlaceEdit
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      updatePlace: (place) => dispatch(updatePlace(place))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceEdit)