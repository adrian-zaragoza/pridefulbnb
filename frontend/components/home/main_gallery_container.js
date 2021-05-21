import {connect} from 'react-redux';
import MainGallery from './main_gallery';

const mapStateToProps = (state) => {
  return{
    places: state.entities.places,
  }
}

// const mapDispatchToProps = dispatch => ({
//   fetchPlace: placeId => dispatch(fetchPlace(placeId)),
//   deletePlaceThunk: (placeId) => dispatch(deletePlaceThunk(placeId))
// });

export default connect(mapStateToProps)(MainGallery);