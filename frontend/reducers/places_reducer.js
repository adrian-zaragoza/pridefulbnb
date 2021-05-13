import { RECEIVE_ALL_PLACES, RECEIVE_PLACE, DELETE_PLACE} from '../actions/place_actions';

const placesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  console.log("nextState", nextState);
  console.log("oldState", oldState)
  switch(action.type){
    case RECEIVE_ALL_PLACES:
      return Object.assign({}, action.places, oldState);
    case RECEIVE_PLACE:
      console.log(action)
      console.log(action.place.place.id)
      console.log(nextState)
      console.log("return nextState",nextState[action.place.place.id] = action.place.place);
      // return nextState[action.place.place.id] = action.place.place;
      return Object.assign({}, oldState, {[action.place.place.id]: action.place.place});
    case DELETE_PLACE:
      return delete nextState[action.placeId]
    default: 
      return oldState;
    
  }
};

export default placesReducer;