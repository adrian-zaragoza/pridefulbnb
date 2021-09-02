import React from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import ReviewCreateContainer from '../review/review_create_container';
import ReviewDeleteContainer from '../review/review_delete_container';

class BookingItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      createReviewModal: false
    }
    
    this.toggleReviewModal = this.toggleReviewModal.bind(this);
    this.handleClickShow = this.handleClickShow.bind(this);
  }

  toggleReviewModal(){
    // e.preventDefault();
    this.setState({createReviewModal: !this.state.createReviewModal})
  }

  handleClickShow(placeId, e){
    e.preventDefault();
    // this.props.fetchPlace(placeId)
    this.props.history.push(`/places/${placeId}`);
  }

  render(){
  const cancelReservationButton = (
    <li id="cancel-button-container">{moment(this.props.booking.startStay) > moment() ? <button className="cancel-reservation-button" onClick={()=> this.props.deleteBooking(this.props.booking.id)}>Cancel Reservation</button> : ""}</li>
  )

  let reviewLink = ""
  let reviewContainer = ""
  if(!this.props.review && !this.props.upcomingTravel){
     reviewLink = (
      <li id="booking-review" onClick={(e)=>{ this.toggleReviewModal(e)}}>Leave Review</li>
    )
    reviewContainer = <ReviewCreateContainer bookingId={this.props.booking.id}  authorId={this.props.booking.travelerId} placeId={this.props.booking.placeId} toggleReviewModal={this.toggleReviewModal}/>
  }else if(!this.props.upcomingTravel){
    reviewLink = (
      <li id="booking-review" onClick={(e)=>{ this.toggleReviewModal(e)}}>Delete Review</li>
    )
    reviewContainer = <ReviewDeleteContainer review={this.props.review} toggleReviewModal={this.toggleReviewModal} />
  }

    return(
      <ul className="place">
        <img src={this.props.bookingImageUrl} onClick={(e)=>{ handleClickShow(this.props.booking.placeId, e)}} />
        <li id="title" onClick={(e)=>{ handleClickShow(this.props.booking.placeId, e)}}>{this.props.place.title}</li>
        <div className="place-details">
          <li>{`${this.props.place.typeOfPlace} •`}</li>
          <li>{`${this.props.place.location}`}</li>
        </div>
        <li className="place-details">{`Trip ${moment(this.props.booking.startStay).format('L')} to ${moment(this.props.booking.endStay).format('L')}`}</li>
        {this.props.upcomingTravel ? cancelReservationButton : ""}
        {reviewLink}
        {/* {this.state.createReviewModal ? <ReviewCreateContainer bookingId={this.props.booking.id}  authorId={this.props.booking.travelerId} placeId={this.props.booking.placeId} toggleReviewModal={this.toggleReviewModal}/> : ""} */}
        {this.state.createReviewModal ? reviewContainer : ""}
      </ul>
    )
  }
}

export default withRouter(BookingItem);