export const getUserBookings = (userId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/users/${userId}/bookings`
    })
  );
};

export const createBooking = (bookingData) => {
  return(
    $.ajax({
      method: 'POST',
      url: `/api/places/${bookingData.placeId}/bookings`,
      data: {bookingData}
    })
  );
};

export const deleteBooking = (bookingId) => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/bookings/${bookingId}`
    })
  );
};