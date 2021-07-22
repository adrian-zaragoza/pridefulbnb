export const fetchReviews = (placeId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/places/${placeId}/reviews`
    })
  );
};

export const createReview = (reviewData) => {
  return (
    $.ajax({
      method: 'POST',
      url: `/api/places/${reviewData.placeId}/reviews`,
      data: {reviewData}
    })
  );
};

export const deleteReview = (reviewId) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/reviews/${reviewId}`
    })
  );
};

