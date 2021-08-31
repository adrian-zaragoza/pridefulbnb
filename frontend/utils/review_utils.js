export const fetchReviews = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/reviews`,
      data: id
    })
  );
};

export const createReview = (review) => {
  console.log(review)
  return (
    $.ajax({
      method: 'POST',
      url: `/api/reviews`,
      data: {review}
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

