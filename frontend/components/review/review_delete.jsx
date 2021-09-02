import React from 'react';

const ReviewDelete = (props) => {

  const handleClose = (e) => {
    e.preventDefault();
    props.toggleReviewModal(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.deleteReviewThunk(props.review).then(()=> props.toggleReviewModal(e))
  }

  return (
    <div className="booking-review">
      <button className="close" onClick={handleClose}>X</button>
      <form className="review-form">
        <label>Your Review
          <textarea  cols="30" rows="10" value={props.review.body} readOnly></textarea>
        </label>
        <input type="submit" value="Delete Review" onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default ReviewDelete;