import { connect } from 'react-redux';
import { deleteReviewThunk } from '../../actions/review_actions';
import ReviewDelete from './review_delete';

const mapStateToProps = (state, ownProps) =>{
  return ({
    review: ownProps.review,
    toggleReviewModal: ownProps.toggleReviewModal
  });
};

const mapDispatchToProps = (dispatch) => ({
  deleteReviewThunk: (reviewId) => dispatch(deleteReviewThunk(reviewId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewDelete);