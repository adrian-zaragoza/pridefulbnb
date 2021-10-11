import React from 'react';
import { withRouter } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { IoPersonOutline } from 'react-icons/io5';
import {BiDoorOpen, BiBath, IoBedOutline, GoLocation} from 'react-icons/all';
import PlaceEditContainer from '../place/place_edit_container';
import BookingContainer from '../booking/booking_container';
// import ReviewIndexContainer from '../review/review_index_container';
import ReviewIndex from '../review/review_index';

class PlaceShow extends React.Component {
  constructor(props){
    super(props);
    this.state = { editPlaceForm: false}
    this.togglePlaceEdit = this.togglePlaceEdit.bind(this);
    this.handlePlaceDelete = this.handlePlaceDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchPlace(this.props.placeId)
  }

  togglePlaceEdit(e){
    e.preventDefault();
    this.setState({editPlaceForm: !this.state.editPlaceForm})
  }

  handlePlaceDelete(e){
    e.preventDefault();
    this.props.deletePlaceThunk(this.props.placeId).then(()=>this.props.history.push(`/places`));
  }


  render(){
    let place = this.props.places;
    let images;
    let placeSpecs;
    let placeHeader;
    let about;
    let propertyRules;
    let nearbyAttractions;
    let editPlaceForm;
    let bookingContainer;
    let reviews;

    if(Object.keys(place).length !== 0 && Array.isArray(place[this.props.placeId].imageUrl)){
      let placeObj = place[this.props.placeId];

      if(this.props.currentUser && this.props.currentUser.id === placeObj.ownerId){
        editPlaceForm = (
          <div className="edit-place-form">
            <button className="edit-place-button" onClick={this.togglePlaceEdit}>Edit</button>
            <button className="edit-place-button" onClick={this.handlePlaceDelete}>Delete</button>
            <PlaceEditContainer editPlaceForm={this.state.editPlaceForm} togglePlaceEdit={this.togglePlaceEdit} place={placeObj}/>
          </div>
        )
      }

      reviews = (
        <ReviewIndex reviews={place[this.props.placeId]?.reviews}/>
      )

      bookingContainer = (
        <BookingContainer place={placeObj} />
      )

      placeHeader = (
        <div className="place-header">
          <h1>{placeObj.title}</h1>
          <h2><p><GoLocation/></p>{placeObj.location}</h2>
          <div>
            {editPlaceForm}
          </div>

        </div>
      )

      placeSpecs = (
        <ul>
          <li><p className="place-specs-icon"><AiOutlineHome/></p> <p>{placeObj.typeOfPlace}</p></li>
          <li><p className="place-specs-icon"><IoPersonOutline/></p> <p>{`${placeObj.maxGuests} ${placeObj.maxGuests > 1 ? 'guests' : 'guest'}`}</p></li>
          <li><p className="place-specs-icon"><BiDoorOpen/></p> <p>{`${placeObj.numOfBedrooms} ${placeObj.numOfBedrooms > 1 ? 'bedrooms' : 'bedroom'}`}</p></li>
          <li><p className="place-specs-icon"><BiBath/></p> <p>{`${placeObj.numOfBathrooms} ${placeObj.numOfBathrooms > 1 ? 'bathrooms' : 'bathroom'}`}</p></li>
          <li><p className="place-specs-icon"><IoBedOutline/></p> <p>{`${placeObj.numOfBeds} ${placeObj.numOfBeds > 1 ? 'beds' : 'bed'}`}</p></li>
        </ul>
      )

      images = place[this.props.placeId].imageUrl.map((image, i) => {
        if(i === 4){
          return(
          <div key={i}>
            <img className="fifth" src={image} alt="place" />
          </div>
          )
        }else{
          return(
                <img key={i} src={image} alt="place" />
          )
        }

      })

      about = (
        <div className="place-about">
          <h2>About the place</h2>
          <p>{placeObj.about}</p>
        </div>
      )

      propertyRules = (
        <div className="place-rules">
          <h2>Property rules & conditions</h2>
          <p>{placeObj.rules}</p>
          <p><b>Check-in:</b>{placeObj.checkInFrom}</p>
          <p><b>Checkout:</b>{placeObj.checkOutBefore}</p>
          <p><b>Cancellation policy:</b>{placeObj.cancellationPolicy === "strict" ? "Strict Policy: 70% refund up to 14 days before confirmed arrival date, then 30% up to 1 day prior to the confirmed check-in date. In both cases, the refund excludes pridefulb&b service fee paid by the guest and by the host. If the stay is interrupted, the guest will have no right to receive a refund." : "Flexible Policy: Full refund up to 7 days prior to check-in if booked with prepayment at least 10 days before check-in. Full refund excludes cancellation fee if booking paid upfront or if booked 9 days or less before check-in and cancelled more than 7 days prior to check-in. If cancellation between 6 and 1 day prior to checkin, 50% refund (excluding cancellation fee). No refund if guests interrupt their stay. The cancellation insurance fee is non refundable."}</p>
        </div>
      )

      nearbyAttractions = (
        <div className="place-attractions">
          <h2>Nearby attractions</h2>
          <p>{placeObj.nearbyAttractions}</p>
        </div>
      )


    }

    return(
      <div className ="place-show">
        <div className="place-images-container">
          <figure className={`pictures-${images ? images.length.toString() : "0"}`}>
            {images}
          </figure>
        </div>
        <div className="place-details-booking">
          <div className="place-show-details">
            {placeHeader}
            <div className="place-specs">
              {placeSpecs}
            </div>
            {about}
            {propertyRules}
            {reviews}
            {nearbyAttractions}
          </div>
          {bookingContainer}
        </div>
      </div>
    )
  }
}

export default withRouter(PlaceShow);