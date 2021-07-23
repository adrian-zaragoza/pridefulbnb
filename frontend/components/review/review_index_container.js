import {connect} from 'react-redux';
import {fetchAllReviews} from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllReviews: placeId => dispatch(fetchAllReviews(placeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);