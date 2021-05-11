import React from 'react';
import PlaceShow from './place_show';

class PlaceShowings extends React.Component{
  constructor(props){
    super(props)
    this.handleClickShow = this.handleClickShow.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllPlaces();
  }

  handleClickShow(id){
    return(<PlaceShow props={this.props.fetchPlace(id)}/>)
    
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
            <li id="title" onClick={(e) => this.handleClickShow(place.id, e)}>{place.title}</li>
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
    )
  }
  
}

export default PlaceShowings;