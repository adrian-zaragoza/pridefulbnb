import {connect} from 'react-redux';
import { fetchAllPlaces, fetchPlace } from '../../actions/place_actions';
import PlaceShowings from './place_showings';

const mapStateToProps = (state) => {
  return {
    places: state.entities.places
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPlaces: () => dispatch(fetchAllPlaces()),
    fetchPlace: (placeId) => dispatch(fetchPlace(placeId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceShowings)