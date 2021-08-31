import * as APIUtil from '../utils/review_utils';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_USER_REVIEWS = "RECEIVE_USER_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

const receiveUserReviews = (reviews) =>({
  type: RECEIVE_USER_REVIEWS,
  reviews
})

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

const deleteReview = (reviewId) => ({
  type: DELETE_REVIEW,
  reviewId
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const fetchAllReviews = (placeId) => (dispatch) =>(
  APIUtil.fetchReviews(placeId).then(reviews => (dispatch(receiveAllReviews(reviews))))
);

export const fetchUserReviews = (userId) => (dispatch) =>(
  APIUtil.fetchReviews(userId).then(reviews=> (dispatch(receiveUserReviews(reviews))))
);

export const createReview = (review) => (dispatch) =>(
  APIUtil.createReview(review).then(review => (dispatch(receiveReview(review))), errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const deleteReviewThunk = (reviewId) => (dispatch) =>(
  APIUtil.deleteReview(reviewId).then(() => (dispatch(deleteReview(reviewId))), errors => (dispatch(receiveErrors(errors.responseJSON))))
)