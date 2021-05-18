export const getAllPlaces = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/places'
    })
  );
};

export const getPlace = (placeId) => {
  return(
    $.ajax({
      method: 'GET',
      url: `/api/places/${placeId}`
    })
  );
};

export const deletePlace = (placeId) => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/places/${placeId}`
    })
  );
};

export const updatePlace = (place) => {
  return(
    $.ajax({
      method: 'PATCH',
      url: `/api/places/${place.id}`,
      data: {place}
    })
  );
};

export const createPlace = (placeData) => {
  return(
    $.ajax({
      method: 'POST',
      url: '/api/places',
      data: {placeData}
    })
  );
};