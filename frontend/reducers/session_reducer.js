import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session';
import { RECEIVE_USER_REVIEWS } from '../actions/review_actions';


const _nullSession = {
  currentUser: null
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.user});
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case RECEIVE_USER_REVIEWS:
      return Object.assign({}, state, { userReviews: action.reviews});
    default:
      return state;
  }
};

export default sessionReducer;