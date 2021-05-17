import React from 'react';

class PlaceEdit extends React.Component{
  constructor(props){
    super(props)
  }


  render(){

    return(
      <div className={this.props.editPlaceForm ? 'place-info' : 'hidden' }>
        <button className="close" onClick={this.props.togglePlaceEdit}>X</button>
        <h1>inside place edit</h1>
      </div>
    )
  }
}

export default PlaceEdit;