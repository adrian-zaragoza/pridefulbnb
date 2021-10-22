import React from 'react';

const ReviewDelete = (props) => {

  const handleClose = (e) => {
    e.preventDefault();
    props.toggleReviewModal(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.deleteReviewThunk(props.review).then(()=> props.toggleReviewModal(e),
    props.toggleSetReview(e))
  }

  return (
    <div className="booking-review">
      <div className="review-content">
        <button className="close" onClick={handleClose}>X</button>
        <h1>Your review for this place</h1>
        <form className="review-form">
          <label>Your review below will be deleted
            <textarea  rows="8" value={props.review ? props.review.body : ""} readOnly></textarea>
          </label>
          <input className="cancel-reservation-button" type="submit" value="Delete Review" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  )
}

export default ReviewDelete;