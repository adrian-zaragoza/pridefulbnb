import {connect} from 'react-redux';
import { fetchPlace } from '../../actions/place_actions';
import PlaceShow from './place_show';

const mapStateToProps = (state, {match}) => {
  const placeId = match.params.placeId
  return{
    placeId: placeId,
    places: state.entities.places
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPlace: placeId => dispatch(fetchPlace(placeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceShow);
