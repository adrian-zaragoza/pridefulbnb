import {connect} from 'react-redux';
import { fetchAllPlaces} from '../../actions/place_actions';
import Search from './search';

const mapStateToProps = (state, ownProps) => {
  console.log("ownProps from search container", ownProps)
  let searchPlaceLocation = ownProps.location.state && ownProps.location.state.searchPlaceLocation || sessionStorage.getItem('searchPlaceLocation');
  
  return{
    places: state.entities.places,
    searchPlaceLocation: searchPlaceLocation
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllPlaces: () => dispatch(fetchAllPlaces())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);