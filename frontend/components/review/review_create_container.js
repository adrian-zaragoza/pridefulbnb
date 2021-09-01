import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewCreate from './review_create';

const mapStateToProps = (state, ownProps) => {
  return ({
    authorId: ownProps.authorId,
    placeId: ownProps.placeId,
    bookingId: ownProps.bookingId,
    toggleReviewModal: ownProps.toggleReviewModal
  });
};

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCreate);