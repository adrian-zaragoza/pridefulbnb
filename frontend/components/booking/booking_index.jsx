import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

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
                <li>{`Trip ${moment(booking.startStay).format('L')} to ${moment(booking.endStay).format('L')}`}</li>
                {/* <li>{new Date(booking.startStay) > new Date() ? <button onClick={()=>this.props.deleteBookingThunk(booking.id)}>Cancel Reservation</button> : ""}</li> */}
                <li>{moment(booking.startStay) > moment() ? <button onClick={()=>this.props.deleteBookingThunk(booking.id)}>Cancel Reservation</button> : ""}</li>
                {/* {console.log("start Date", new Date(`${booking.startStay} 00:00`))}
                {console.log(booking.startStay)}
                {console.log("Today", new Date())} */}
                {/* {console.log("result", new Date(`${booking.startStay} 00:00`) > new Date())} */}
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