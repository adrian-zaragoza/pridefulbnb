import { RECEIVE_ALL_PLACES, RECEIVE_PLACE, DELETE_PLACE} from '../actions/place_actions';

const placesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_ALL_PLACES:
      return Object.assign({}, action.places, oldState);
    case RECEIVE_PLACE:
      return Object.assign({}, {[action.place.id]: action.place}, oldState)
    case DELETE_PLACE:
      return delete nextState[action.placeId]
      default: 
      return oldState;
    
  }
};

export default placesReducer;