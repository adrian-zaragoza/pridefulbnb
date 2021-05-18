import React from 'react';

class PlaceEdit extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: this.props.place.title,
      about: this.props.place.about,
      location: this.props.location,
      typeOfPlace: this.props.typeOfPlace,
      maxGuests: this.props.maxGuests,
      numOfBedrooms: this.props.numOfBedrooms,
      numOfBathrooms: this.props.numOfBathrooms,
      numOfBeds: this.props.numOfBeds,
      cancellationPolicy: this.props.cancellationPolicy,
      rules: this.props.rules,
      checkInFrom: this.props.checkInFrom,
      checkOutBefore: this.props.checkOutBefore,
      imageUrl: this.props.imageUrl,
      nearbyAttractions: this.props.nearbyAttractions
    }

    this.updateText = this.updateText.bind(this);
  }

  updateText(field){
    return((e) => {
      let value = e.currentTarget.value;
      this.setState({[field]: value})
    });
  }

  render(){

    return(
      <div className={this.props.editPlaceForm ? 'place-info' : 'hidden' }>
        <button className="close" onClick={this.props.togglePlaceEdit}>X</button>
        <div className="place-edit-form">
          <h1>Edit Place</h1>
          <label>Title
            <input type="text" value={this.state.title} onChange={this.updateText('title')} />
          </label>
          <label>Location
            <input type="text" value={this.state.location} onChange={this.updateText('location')} />
          </label>
          <label>Type of Place
            <select defaultValue={this.state.typeOfPlace}>
              <option value="Private Room" onChange={this.updateText('typeOfPlace')}>Private Room</option>
              <option value="Entire Place" onChange={this.updateText('typeOfPlace')}>Entire Place</option>
            </select>
          </label>
          <label>Max Guests
            <input type="number" value={this.state.maxGuests} min="1" onChange={this.updateText('maxGuests')} />
          </label>
          <label>Number of Bedrooms
            <input type="number" value={this.state.numOfBedrooms} min="1" onChange={this.updateText('numOfBedrooms')} />
          </label>
          <label>Number of Beds
            <input type="number" value={this.state.numOfBeds} min="1" onChange={this.updateText('numOfBeds')} />
          </label>
          <label>Number of Bathrooms
            <input type="number" value={this.state.numOfBathrooms} min="1" onChange={this.updateText('numOfBathrooms')} />
          </label>
          <label>About
            <textarea cols="30" rows="10" value={this.state.about} onChange={this.updateText('about')}></textarea>
          </label>
          <label>Nearby Attractions
            <textarea cols="30" rows="10" value={this.state.nearbyAttractions} onChange={this.updateText('nearbyAttractions')}></textarea>
          </label>
          <label>Rules
            <textarea cols="30" rows="10" value={this.state.rules} onChange={this.updateText('rules')}></textarea>
          </label>
          <label>Check in from
            <input type="time" value={this.state.checkInFrom} onChange={this.updateText('checkInFrom')}/>
          </label>
          <label>Check out before
            <input type="time" value={this.state.checkOutBefore} onChange={this.updateText('checkOutBefore')}/>
          </label>
          <label>Cancellation Policy
            
          </label>
        </div>
      </div>
    )
  }
}

export default PlaceEdit;