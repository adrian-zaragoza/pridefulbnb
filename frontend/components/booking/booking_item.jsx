import React from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

const BookingItem = (props) => {

  const HandleClickShow = (placeId, e) =>{
    e.preventDefault();
    // this.props.fetchPlace(placeId)
    props.history.push(`/places/${placeId}`);
  }

  const cancelReservationButton = (
    <li id="cancel-button-container">{moment(props.booking.startStay) > moment() ? <button className="cancel-reservation-button" onClick={()=> props.deleteBooking(props.booking.id)}>Cancel Reservation</button> : ""}</li>
  )

  return(
    <ul className="place">
      <img src={props.bookingImageUrl} onClick={(e)=>{ HandleClickShow(props.booking.placeId, e)}} />
      <li id="title" onClick={(e)=>{ HandleClickShow(props.booking.placeId, e)}}>{props.place.title}</li>
      <div className="place-details">
        <li>{`${props.place.typeOfPlace} •`}</li>
        <li>{`${props.place.location}`}</li>
      </div>
      <li className="place-details">{`Trip ${moment(props.booking.startStay).format('L')} to ${moment(props.booking.endStay).format('L')}`}</li>
      {props.upcomingTravel ? cancelReservationButton : ""}
    </ul>
  )
}

export default withRouter(BookingItem);