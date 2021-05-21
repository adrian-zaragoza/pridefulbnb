import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props)

  }

  componentDidMount(){
    if (this.props.places && Object.keys(this.props.places).length === 0){
      this.props.fetchAllPlaces();
    }

  }

  render(){
    let searchLocationLowercase = this.props.searchPlaceLocation.toLowerCase();
    let valuesArr = Object.values(this.props.places);
    let filteredArr = valuesArr.filter(placeObj => placeObj.location.toLowerCase().includes(searchLocationLowercase))

    return(
      <div className="search-results">
        <h1>{`Explore Gay Rooms & Rentals, ${filteredArr.length} places to stay`}</h1>

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