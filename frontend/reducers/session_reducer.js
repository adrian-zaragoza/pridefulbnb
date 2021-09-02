import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session';
import { DELETE_REVIEW, RECEIVE_USER_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';


const _nullSession = {
  currentUser: null
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.user});
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case DELETE_REVIEW:
      delete nextState.userReviews[action.review.bookingId]
      return nextState
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { userReviews: action.review});
    case RECEIVE_USER_REVIEWS:
      return Object.assign({}, state, { userReviews: action.reviews});
    default:
      return state;
  }
};

export default sessionReducer;