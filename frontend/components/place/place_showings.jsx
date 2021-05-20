import React from 'react';
import { withRouter } from 'react-router-dom';
import PlaceCreateContainer from './place_create_container';

class PlaceShowings extends React.Component{
  constructor(props){
    super(props)
    this.state = { createPlaceForm: false}
    this.handleClickShow = this.handleClickShow.bind(this);
    this.handleAddPlace = this.handleAddPlace.bind(this);
    this.togglePlaceCreate = this.togglePlaceCreate.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllPlaces();
  }

  handleClickShow(placeId, e){
    e.preventDefault();
    // this.props.fetchPlace(placeId)
    this.props.history.push(`/places/${placeId}`)
  }

  handleAddPlace(e){
    e.preventDefault();

    if(this.props.currentUser){
      this.togglePlaceCreate();
    }else{
      return this.props.history.push(`/login`)
    }
  }

  togglePlaceCreate(e){
    // e.preventDefault();
    this.setState({createPlaceForm: !this.state.createPlaceForm})
  }

  render(){
    let placesArr = Object.values(this.props.places)
    
    return(
      <div className="place-index">
        <button className="add-place-button" onClick={this.handleAddPlace}>+ Add Place</button>
          {this.state.createPlaceForm ? <PlaceCreateContainer  createPlaceForm={this.state.createPlaceForm} togglePlaceCreate={this.togglePlaceCreate} currentUser={this.props.currentUser}/> : ""}
        <div className="places-listings">
          {
            placesArr.map((place) => {
            return(
              <ul key={place.id} className="place">
                <img src={place.imageUrl} alt={place.title}/>
                <li id="title" onClick={(e)=>{ this.handleClickShow(place.id, e)}}>{place.title}</li>
                <div className="place-details">
                  <li>{`${place.typeOfPlace} •`}</li>
                  <li>{`${place.location} •`}</li>
                  <li>{`${place.pricePerDay} per day`}</li>
                </div>
              </ul>
            )
            } )
          }
        </div>
    </div>
    )
  }
  
}

export default withRouter(PlaceShowings);