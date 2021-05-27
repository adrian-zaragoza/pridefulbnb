import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingIndex extends React.Component{
  constructor(props){
    super(props)
    this.handleClickShow = this.handleClickShow.bind(this);
  }

  componentDidMount(){
    this.props.fetchUserBookings(this.props.currentUser.id)
  }

  handleClickShow(placeId, e){
    e.preventDefault();
    // this.props.fetchPlace(placeId)
    this.props.history.push(`/places/${placeId}`);
  }

  render(){
    let travels;
    if(this.props.bookings && Object.values(this.props.bookings).length === 0){
      travels = (<h1>No upcoming travel... yet</h1>)
    }else if(this.props.bookings && Object.values(this.props.bookings).length > 0){
      let bookingsArr = Object.values(this.props.bookings.bookings)
      
      travels = (
      <div className="place-index">
        {console.log("inside the travels variable")}
        <div className="places-listings">
          {
            bookingsArr.map((booking) => {
              let place = this.props.bookings.places[booking.placeId];
            return(
              <ul key={booking.id} className="place">
                <img src={this.props.bookings.places[booking.placeId].imageUrl} onClick={(e)=>{ this.handleClickShow(booking.placeId, e)}} />
                <li id="title" onClick={(e)=>{ this.handleClickShow(booking.placeId, e)}}>{place.title}</li>
                <div className="place-details">
                  <li>{`${place.typeOfPlace} •`}</li>
                  <li>{`${place.location}`}</li>
                </div>
                <li>{`Trip ${booking.startStay} to ${booking.endStay}`}</li>
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
        {travels}
      </div>
    )
  }
}

export default withRouter(BookingIndex);