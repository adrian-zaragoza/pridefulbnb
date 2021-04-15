import React from 'react';

class PlaceShowings extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllPlaces();
  }

  render(){
    let placesArr = Object.values(this.props.places)
    return(
      <div className="places-listings">
        {
        placesArr.map((place) => {
        return(
          <ul key={place.id} className="place">
            <li>{place.title}</li>
            <li>{place.pricePerDay}</li>
            <li>{place.typeOfPlace}</li>
            <li>{place.location}</li>
          </ul>
        )
      } )
    }
      </div>
    )
  }
  
}

export default PlaceShowings;