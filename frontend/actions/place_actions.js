import * as APIUtil from '../utils/place_utils';

export const RECEIVE_ALL_PLACES = "RECEIVE_ALL_PLACES";
export const RECEIVE_PLACE = "RECEIVE_PLACE";
export const DELETE_PLACE = "DELETE_PLACE";

const receiveAllPlaces = (places) => ({
  type: RECEIVE_ALL_PLACES,
  places
})

const receivePlace = (place) => ({
  type: RECEIVE_PLACE,
  place
})

const deletePlace = (placeId) =>({
  type: DELETE_PLACE,
  placeId
})

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const fetchAllPlaces = () => (dispatch) =>(
  APIUtil.getAllPlaces().then(places => (dispatch(receiveAllPlaces(places))))
);

export const fetchPlace = (placeId) => (dispatch) =>(
  APIUtil.getPlace(placeId).then(place => (dispatch(receivePlace(place))), errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const deletePlaceThunk = (placeId) => (dispatch) => (
  APIUtil.deletePlace(placeId).then(() => (dispatch(deletePlace(placeId))), errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const updatePlace = (place) => (dispatch) =>(
  APIUtil.updatePlace(place).then(place => (dispatch(receivePlace(place))), errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const createPlace = (place) => (dispatch) =>(
  APIUtil.createPlace(place).then(place =>(dispatch(receivePlace(place))), errors => (dispatch(receiveErrors(errors.responseJSON))))
);

