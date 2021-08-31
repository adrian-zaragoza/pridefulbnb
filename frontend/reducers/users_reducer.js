import { RECEIVE_CURRENT_USER } from '../actions/session';
import { RECEIVE_USER_REVIEWS } from '../actions/review_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { [action.user.id]: action.user });
    case RECEIVE_USER_REVIEWS:
      return Object.assign({}, oldState, action.reviews)
    default:
      return oldState;
  }
};

export default usersReducer;