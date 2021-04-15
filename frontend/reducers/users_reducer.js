import { RECEIVE_CURRENT_USER } from '../actions/session';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  console.log(action)
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { [action.user.id]: action.user });
    default:
      return oldState;
  }
};

export default usersReducer;