import {connect} from 'react-redux';
import { fetchAllPlaces } from '../../actions/place_actions';
import PlaceShowings from './place_showings';

const mapStateToProps = (state) => {
  return {
    places: state.entities.places
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPlaces: () => dispatch(fetchAllPlaces())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceShowings)