import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

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
    this.props.fetchUserBookings(this.props.currentUser.id)
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
      upcomingTravels = (<h1>No upcoming travel... yet</h1>)
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
        <div className="place-index">
          <div className="travels-buttons">
            <button id="upcoming-button" onClick={(e)=>this.handleTravelsToggle("upcoming", e)}>Upcoming travels</button>
            <button id="past-button" onClick={(e)=>this.handleTravelsToggle("past", e)}>Past travels</button>
          </div>
          <div className="places-listings">
            {
              upcomingTravelsArr.map((booking) => {
                let place = this.props.bookings.places[booking.placeId];
              return(
                <ul key={booking.id} className="place">
                  <img src={this.props.bookings.places[booking.placeId].imageUrl} onClick={(e)=>{ this.handleClickShow(booking.placeId, e)}} />
                  <li id="title" onClick={(e)=>{ this.handleClickShow(booking.placeId, e)}}>{place.title}</li>
                  <div className="place-details">
                    <li>{`${place.typeOfPlace} •`}</li>
                    <li>{`${place.location}`}</li>
                  </div>
                  <li className="place-details">{`Trip ${moment(booking.startStay).format('L')} to ${moment(booking.endStay).format('L')}`}</li>
                  <li id="cancel-button-container">{moment(booking.startStay) > moment() ? <button className="cancel-reservation-button" onClick={()=>this.props.deleteBookingThunk(booking.id)}>Cancel Reservation</button> : ""}</li>
                </ul>
              )
              } )
            }
          </div>
        </div>
      )

      
      pastTravels = (
        <div className="place-index">
          <div className="travels-buttons">
            <button id="upcoming-button" onClick={(e)=>this.handleTravelsToggle("upcoming", e)}>Upcoming travels</button>
            <button id="past-button" onClick={(e)=>this.handleTravelsToggle("past", e)}>Past travels</button>
          </div>
          <div className="places-listings">
            {
              pastTravelsArr.map((booking) => {
                let place = this.props.bookings.places[booking.placeId];
              return(
                <ul key={booking.id} className="place">
                  <img src={this.props.bookings.places[booking.placeId].imageUrl} onClick={(e)=>{ this.handleClickShow(booking.placeId, e)}} />
                  <li id="title" onClick={(e)=>{ this.handleClickShow(booking.placeId, e)}}>{place.title}</li>
                  <div className="place-details">
                    <li>{`${place.typeOfPlace} •`}</li>
                    <li>{`${place.location}`}</li>
                  </div>
                  <li className="place-details">{`Trip ${moment(booking.startStay).format('L')} to ${moment(booking.endStay).format('L')}`}</li>
                </ul>
              )
              } )
            }
          </div>
        </div>
      )


    }

    return(
      <div>
        {this.state.upcomingTravels ? upcomingTravels : pastTravels}
      </div>
    )
  }
}

export default withRouter(BookingIndex);