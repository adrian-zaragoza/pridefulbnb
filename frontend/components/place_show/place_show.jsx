import React from 'react';

class PlaceShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPlace(this.props.placeId)
  }

  render(){

    return(
      <div>
      </div>
    )
  }
}

export default PlaceShow;