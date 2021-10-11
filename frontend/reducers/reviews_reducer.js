import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, DELETE_REVIEW } from '../actions/review_actions';

const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch(action.type){
    // case RECEIVE_ALL_REVIEWS:
    //   return Object.assign({}, oldState, action.reviews);
    // case RECEIVE_REVIEW:
    //   return 
    // case DELETE_REVIEW:
    //   console.log("this is the next state",nextState)
    //   return delete nextState[action.reviewId]
    default:
      return oldState;
  }
};

export default reviewsReducer;