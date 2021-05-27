export const getUserBookings = (userId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/users/${userId}/bookings`
    })
  );
};

export const createBooking = (booking) => {
  return(
    $.ajax({
      method: 'POST',
      url: `/api/places/${booking.placeId}/bookings`,
      data: {booking}
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