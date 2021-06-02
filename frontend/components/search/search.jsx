import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component{
  constructor(props){
    super(props)
    console.log("props in search component", props)
  }

  componentDidMount(){
    if (this.props.places && Object.keys(this.props.places).length === 0){
      this.props.fetchAllPlaces();
    }

  }

  handleClickShow(placeId, e){
    e.preventDefault();
    // this.props.fetchPlace(placeId)
    this.props.history.push(`/places/${placeId}`)
  }

  render(){
    let searchLocationLowercase;
    let valuesArr;
    let filteredArr=[];
    if(this.props.searchPlaceLocation &&  Object.values(this.props.places).length !== 0){
      searchLocationLowercase = this.props.searchPlaceLocation.toLowerCase();
      valuesArr = Object.values(this.props.places);
      filteredArr = valuesArr.filter(placeObj => placeObj.location.toLowerCase().includes(searchLocationLowercase))
    }
    return(
      <div className="search-results">
        <h1><img src={window.prideBannerIcon} alt="pride banner" />{`Explore Gay Rooms & Rentals, ${filteredArr.length} places to stay`}</h1>

        <div className="places-listings">
          {
            filteredArr.map((place) => {
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
};

export default Search;