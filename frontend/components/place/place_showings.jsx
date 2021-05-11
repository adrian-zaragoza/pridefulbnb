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
            <img src={place.imageUrl} alt={place.title}/>
            <li id="title">{place.title}</li>
            <div class="place-details">
              <li>{`${place.typeOfPlace} •`}</li>
              <li>{`${place.location} •`}</li>
              <li>{`${place.pricePerDay} per day`}</li>
            </div>
          </ul>
        )
      } )
    }
      </div>
    )
  }
  
}

export default PlaceShowings;