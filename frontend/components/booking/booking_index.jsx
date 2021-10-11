import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { BsTypeH1 } from 'react-icons/bs';
import BookingItem from './booking_item';

class BookingIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      upcomingTravels: true,
      pastTravels: false
    }

    this.handleClickShow = this.handleClickShow.bind(this);
    this.handleTravelsToggle = this.handleTravelsToggle.bind(this);
  }

  componentDidMount(){
    this.props.fetchUserBookings(this.props.currentUser.id);
    this.props.fetchUserReviews({authorId: this.props.currentUser.id})

  }

  handleClickShow(placeId, e){
    e.preventDefault();
    // this.props.fetchPlace(placeId)
    this.props.history.push(`/places/${placeId}`);
  }

  handleTravelsToggle(type, e){
    e.preventDefault();
    if(type === "upcoming" && this.state.upcomingTravels === false){
      this.setState({
        upcomingTravels: true,
        pastTravels: false
      })
    }else if(type === "past" && this.state.pastTravels === false){
      this.setState({
        upcomingTravels: false,
        pastTravels: true
      })
    }
  }

  render(){
    let upcomingTravels;
    let pastTravels;
    if(this.props.bookings && Object.values(this.props.bookings).length === 0){
      
    }else if(this.props.bookings && Object.values(this.props.bookings).length > 0){
      let bookingsArr = Object.values(this.props.bookings.bookings);
      let upcomingTravelsArr = [];
      let pastTravelsArr = [];

      for(let i = 0; i < bookingsArr.length; i++){
        if(moment(bookingsArr[i].endStay) > moment()){
          upcomingTravelsArr.push(bookingsArr[i]);
        }else{
          pastTravelsArr.push(bookingsArr[i]);
        }
      }

      upcomingTravels = (
              upcomingTravelsArr = upcomingTravelsArr.map((booking) => {
                let place = this.props.bookings.places[booking.placeId];
              return(
                <BookingItem key={booking.id} upcomingTravel={true} place={place} bookingImageUrl={this.props.bookings.places[booking.placeId].imageUrl} booking={booking} deleteBooking={this.props.deleteBookingThunk} />
              )
              } )
      )
         
      pastTravels = (
              pastTravelsArr.map((booking) => {
                let place = this.props.bookings.places[booking.placeId];
              return(
                <BookingItem key={booking.id} review={this.props.userReviews[booking.id]} upcomingTravel={false} place={place} bookingImageUrl={this.props.bookings.places[booking.placeId].imageUrl} booking={booking} deleteBooking={this.props.deleteBookingThunk} />
              )
              } )
      )

    }
    
    return(
      <div>
         <div className="place-index">
          <div className="travels-buttons">
            <button id="upcoming-button" onClick={(e)=>this.handleTravelsToggle("upcoming", e)}>Upcoming travels</button>
            <button id="past-button" onClick={(e)=>this.handleTravelsToggle("past", e)}>Past travels</button>
          </div>
          <div className="places-listings">
            {this.state.upcomingTravels ? upcomingTravels : pastTravels}
          </div>
         </div>
      </div>
    )
  }
}

export default withRouter(BookingIndex);