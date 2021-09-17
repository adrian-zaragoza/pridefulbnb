import React from 'react';

class ReviewCreate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      body: ""
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose(e){
    e.preventDefault();
    this.props.toggleReviewModal();
    this.setState({body: ""});
  }

  updateText(field){
    return((e) => {
      this.setState({[field]: e.target.value})
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let review = {
      body: this.state.body,
      authorId: this.props.authorId,
      placeId: this.props.placeId,
      bookingId: this.props.bookingId
    }
    this.props.createReview(review).then(()=>this.props.toggleReviewModal(e),
    this.props.toggleSetReview(e))
  }
  

  render(){
    return(
      <div className="booking-review">
        <button className="close" onClick={this.handleClose}>X</button>
        <form className="review-form">
          <label>Your Review
            <textarea value={this.state.body} onChange={this.updateText("body")} />
          </label>
          <input type="submit" value="Submit Review" onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default ReviewCreate;