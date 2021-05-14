import React from 'react';
import { FaBeer } from 'react-icons/fa';

class PlaceShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPlace(this.props.placeId)
  }

  componentDidUpdate(prevProps){
    // if(this.props.places !== prevProps.places){
    //   this.props.fetchPlace(this.props.placeId)
    // }
  }

  render(){
    let place = this.props.places;
    let images;

    if(Object.keys(place).length !== 0 && Array.isArray(place[this.props.placeId].imageUrl)){
        console.log("inside the if")
        images = place[this.props.placeId].imageUrl.map((image, i) => {
        return(
           <figure  key={i}>
              <img src={image} alt="place" />
            </figure>
        )
      })
    }

    return(
      <div className ="place-show">
        <div className="place-images-container">
          {images}
        </div>
      </div>
    )
  }
}

export default PlaceShow;