import {connect} from 'react-redux';
import { fetchPlace } from '../../actions/place_actions';
import PlaceShow from './place_show';
import { clearErrors } from '../../actions/session';

const mapStateToProps = (state, {match}) => {
  const placeId = match.params.placeId
  return{
    placeId: placeId,
    places: state.entities.places,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPlace: placeId => dispatch(fetchPlace(placeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceShow);
