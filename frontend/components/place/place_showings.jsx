import React from 'react';
import { withRouter } from 'react-router-dom';
import PlaceCreateContainer from './place_create_container';
import SignUpContainer from '../session/signup_container';
import LogInContainer from '../session/login_container';

class PlaceShowings extends React.Component{
  constructor(props){
    super(props)
    this.state = { 
      createPlaceForm: false,
      loginModalForm: false,
      signupModalForm: false
    }

    this.handleClickShow = this.handleClickShow.bind(this);
    this.handleAddPlace = this.handleAddPlace.bind(this);
    this.togglePlaceCreate = this.togglePlaceCreate.bind(this);
    this.handleLoginSignupForms = this.handleLoginSignupForms.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllPlaces();
  }

  handleClickShow(placeId, e){
    e.preventDefault();
    // this.props.fetchPlace(placeId)
    this.props.history.push(`/places/${placeId}`)
  }

  handleLoginSignupForms(type){

    if(type === "login"){
      this.setState({loginModalForm: !this.state.loginModalForm}, ()=>{
        if(this.state.loginModalForm){
          return document.querySelector("body").style.overflow = 'hidden';
        }else{
          return document.querySelector("body").style.overflow = 'auto';
        }
      })
    }else{
      this.setState({signupModalForm: !this.state.signupModalForm}, ()=>{
        if(this.state.signupModalForm){
          return document.querySelector("body").style.overflow = 'hidden';
        }else{
          return document.querySelector("body").style.overflow = 'auto';
        }
      })
    }
    

  }

  handleAddPlace(e){
    e.preventDefault();

    if(this.props.currentUser){
      this.togglePlaceCreate();
    }else{
      this.handleLoginSignupForms("login", e);
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
                <img src={place.imageUrl} alt={place.title} onClick={(e)=>{ this.handleClickShow(place.id, e)}} />
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
        {this.state.signupModalForm ? <SignUpContainer signupModalForm={this.state.signupModalForm} handleLoginSignupForms={this.handleLoginSignupForms}  /> : ""}
        {this.state.loginModalForm ? <LogInContainer loginModalForm={this.state.loginModalForm} handleLoginSignupForms={this.handleLoginSignupForms}  /> : ""}
      </div>
    )
  }
  
}

export default withRouter(PlaceShowings);