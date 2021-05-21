import {connect} from 'react-redux';
import { fetchAllPlaces} from '../../actions/place_actions';
import Search from './search';

const mapStateToProps = (state, ownProps) => {
  return{
    places: state.entities.places,
    searchPlaceLocation: ownProps.searchPlaceLocation
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllPlaces: () => dispatch(fetchAllPlaces())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);