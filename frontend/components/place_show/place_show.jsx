import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { IoPersonOutline } from 'react-icons/io5';
import {BiDoorOpen, BiBath, IoBedOutline, GoLocation} from 'react-icons/all';
import PlaceEditContainer from '../place/place_edit_container';

class PlaceShow extends React.Component {
  constructor(props){
    super(props);
    this.state = { editPlaceForm: false}
    this.togglePlaceEdit = this.togglePlaceEdit.bind(this)
  }

  componentDidMount(){
    this.props.fetchPlace(this.props.placeId)
  }

  togglePlaceEdit(e){
    e.preventDefault();
    this.setState({editPlaceForm: !this.state.editPlaceForm})
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

    if(Object.keys(place).length !== 0 && Array.isArray(place[this.props.placeId].imageUrl)){
      let placeObj = place[this.props.placeId];

      placeHeader = (
        <div className="place-header">
          <h1>{placeObj.title}</h1>
          <h2><p><GoLocation/></p>{placeObj.location}</h2>
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
        return(
              <img key={i} src={image} alt="place" />
          )
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
          <p><b>Cancellation policy:</b>{placeObj.cancellationPolicy}</p>
        </div>
      )

      nearbyAttractions = (
        <div className="place-attractions">
          <h2>Nearby attractions</h2>
          <p>{placeObj.nearbyAttractions}</p>
        </div>
      )

      if(this.props.currentUser && this.props.currentUser.id === placeObj.ownerId){
        editPlaceForm = (
          <div className="edit-place-form">
            <button className="edit-place-button" onClick={this.togglePlaceEdit}>Edit</button>
            <PlaceEditContainer editPlaceForm={this.state.editPlaceForm} togglePlaceEdit={this.togglePlaceEdit} place={placeObj}/>
          </div>
        )
      }
    }

    return(
      <div className ="place-show">
        <div className="place-images-container">
          <figure>
            {images}
          </figure>
        </div>
        <div className="place-show-details">
          {placeHeader}
          {editPlaceForm}
          <div className="place-specs">
            {placeSpecs}
          </div>
          {about}
          {propertyRules}
          {nearbyAttractions}
        </div>
      </div>
    )
  }
}

export default PlaceShow;