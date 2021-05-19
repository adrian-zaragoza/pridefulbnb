import React from 'react';

class PlaceEdit extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.place.id,
      ownerId: this.props.place.ownerId,
      title: this.props.place.title,
      about: this.props.place.about,
      location: this.props.place.location,
      typeOfPlace: this.props.place.typeOfPlace,
      maxGuests: this.props.place.maxGuests,
      numOfBedrooms: this.props.place.numOfBedrooms,
      numOfBathrooms: this.props.place.numOfBathrooms,
      numOfBeds: this.props.place.numOfBeds,
      cancellationPolicy: this.props.place.cancellationPolicy,
      rules: this.props.place.rules,
      checkInFrom: this.props.place.checkInFrom,
      checkOutBefore: this.props.place.checkOutBefore,
      imageUrl: this.props.place.imageUrl,
      nearbyAttractions: this.props.place.nearbyAttractions,
      pricePerDay: this.props.place.pricePerDay
    }

    this.updateText = this.updateText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  updateText(field){
    return((e) => {
      let value;
      if(field === 'imageUrl'){
        value = e.currentTarget.files;
      }else{
        value = e.currentTarget.value;
      }
      this.setState({[field]: value})
    });
  }

  handleCloseClick(e){
   e.preventDefault()
    this.props.clearErrors();
    this.props.togglePlaceEdit(e);        
    this.setState({
      id: this.props.place.id,
      ownerId: this.props.place.ownerId,
      title: this.props.place.title,
      about: this.props.place.about,
      location: this.props.place.location,
      typeOfPlace: this.props.place.typeOfPlace,
      maxGuests: this.props.place.maxGuests,
      numOfBedrooms: this.props.place.numOfBedrooms,
      numOfBathrooms: this.props.place.numOfBathrooms,
      numOfBeds: this.props.place.numOfBeds,
      cancellationPolicy: this.props.place.cancellationPolicy,
      rules: this.props.place.rules,
      checkInFrom: this.props.place.checkInFrom,
      checkOutBefore: this.props.place.checkOutBefore,
      imageUrl: this.props.place.imageUrl,
      nearbyAttractions: this.props.place.nearbyAttractions,
      pricePerDay: this.props.place.pricePerDay
    });
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.clearErrors();
    
    const {id, ownerId, title, about, location, typeOfPlace, maxGuests, numOfBedrooms, numOfBathrooms, numOfBeds, cancellationPolicy, rules, checkInFrom, checkOutBefore, imageUrl, nearbyAttractions, pricePerDay} = this.state;
    const placeData = new FormData();
    console.log("ownerId", ownerId)
    placeData.append("place[id]", id);
    placeData.append("place[ownerId]", ownerId);
    placeData.append("place[title]", title);
    placeData.append("place[about]", about);
    placeData.append("place[location]", location);
    placeData.append("place[typeOfPlace]", typeOfPlace);
    placeData.append("place[maxGuests]", maxGuests);
    placeData.append("place[numOfBedrooms]", numOfBedrooms);
    placeData.append("place[numOfBathrooms]", numOfBathrooms);
    placeData.append("place[numOfBeds]", numOfBeds);
    placeData.append("place[cancellationPolicy]", cancellationPolicy);
    placeData.append("place[rules]", rules);
    placeData.append("place[checkInFrom]", checkInFrom);
    placeData.append("place[checkOutBefore]", checkOutBefore);
    placeData.append("place[nearbyAttractions]", nearbyAttractions);
    placeData.append("place[pricePerDay]", pricePerDay);

    for (let i = 0; i < imageUrl.length; i++){
      placeData.append("place[images][]", imageUrl[i]);
    }
    console.log(placeData.get("place[ownerId]"))
    this.props.updatePlace(placeData);
  }

  showErrors(){
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    )
  }

  render(){

    return(
      <div className={this.props.editPlaceForm ? 'place-info' : 'hidden' }>
        <button className="close" onClick={this.handleCloseClick} >X</button>

        <div className="place-edit-form">
          <div className="title-errors">
            <h1>Edit Place</h1>
            {this.showErrors()}
          </div>
          
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
          <label>Price Per Day
            <input type="number" min="1" step="any" value={this.state.pricePerDay} onChange={this.updateText('pricePerDay')}/>
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
          <p>Select the cancellation policy</p>
          <input type="radio" id="strict" value="strict" name="policy" checked={this.state.cancellationPolicy === "strict" ? "checked" : ""} onChange={this.updateText('cancellationPolicy')}/>
            <label htmlFor="strict">Strict Policy: 70% refund up to 14 days before confirmed arrival date, then 30% up to 1 day prior to the confirmed check-in date. In both cases, the refund excludes pridefulb&b service fee paid by the guest and by the host. If the stay is interrupted, the guest will have no right to receive a refund.</label>
          <br />
          <input type="radio" id="flexible" value="flexible" name="policy" checked={this.state.cancellationPolicy === "flexible" ? "checked" : ""} onChange={this.updateText('cancellationPolicy')} />
            <label htmlFor="flexible" value="flexible">Flexible Policy: Full refund up to 7 days prior to check-in if booked with prepayment at least 10 days before check-in. Full refund excludes cancellation fee if booking paid upfront or if booked 9 days or less before check-in and cancelled more than 7 days prior to check-in. If cancellation between 6 and 1 day prior to checkin, 50% refund (excluding cancellation fee). No refund if guests interrupt their stay. The cancellation insurance fee is non refundable.</label>
          <br />
          <input type="file" onChange={this.updateText('imageUrl')} multiple />
          <input type="submit" value="Update" onClick={this.handleSubmit}/>
        </div>

      </div>
    )
  }
}

export default PlaceEdit;