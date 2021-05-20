import React from 'react';

class PlaceCreate extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
    this.state = {
      ownerId: this.props.currentUser.id,
      title: "",
      about: "",
      location: "",
      typeOfPlace: "",
      maxGuests: "",
      numOfBedrooms: "",
      numOfBathrooms: "",
      numOfBeds: "",
      cancellationPolicy: "",
      rules: "",
      checkInFrom: "",
      checkOutBefore: "",
      imageUrl: "",
      nearbyAttractions: "",
      pricePerDay: ""
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
    this.props.togglePlaceCreate(e);

    this.setState({
      ownerId: this.props.currentUser.id,
      title: "",
      about: "",
      location: "",
      typeOfPlace: "",
      maxGuests: "",
      numOfBedrooms: "",
      numOfBathrooms: "",
      numOfBeds: "",
      cancellationPolicy: "",
      rules: "",
      checkInFrom: "",
      checkOutBefore: "",
      imageUrl: "",
      nearbyAttractions: "",
      pricePerDay: ""
    });
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.clearErrors();
    
    const {ownerId, title, about, location, typeOfPlace, maxGuests, numOfBedrooms, numOfBathrooms, numOfBeds, cancellationPolicy, rules, checkInFrom, checkOutBefore, imageUrl, nearbyAttractions, pricePerDay} = this.state;
    console.log("typeOfPlace", typeOfPlace)
    const placeData = new FormData();

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

    this.props.createPlace(placeData);
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
      <div className={this.props.createPlaceForm ? 'place-info' : 'hidden' }>
        <button className="close" onClick={this.handleCloseClick} >X</button>

        <div className="place-edit-form modal-content">
          <div className="title-errors">
            <div className="title">
              <img src={prideBannerIcon} alt="pride banner icon"/>
              <h1>Add Place</h1>
            </div>
            {this.showErrors()}
          </div>
          <div>
            <label>Title
              <input type="text" value={this.state.title} onChange={this.updateText('title')} />
            </label>
            <label>Location
              <input type="text" value={this.state.location} onChange={this.updateText('location')} />
            </label>
          </div>
          <div>
            <label>Type of Place
              <select onChange={this.updateText('typeOfPlace')}>
                <option value="Private Room" >Private Room</option>
                <option value="Entire Place" >Entire Place</option>
              </select>
            </label>
            <label>Price Per Day
              <input type="number" min="1" step="any" value={this.state.pricePerDay} onChange={this.updateText('pricePerDay')}/>
            </label>
            <label>Max Guests
              <input type="number" value={this.state.maxGuests} min="1" onChange={this.updateText('maxGuests')} />
            </label>
          </div>
          <div>
            <label>Number of Bedrooms
              <input type="number" value={this.state.numOfBedrooms} min="1" onChange={this.updateText('numOfBedrooms')} />
            </label>
            <label>Number of Beds
              <input type="number" value={this.state.numOfBeds} min="1" onChange={this.updateText('numOfBeds')} />
            </label>
            <label>Number of Bathrooms
              <input type="number" value={this.state.numOfBathrooms} min="1" onChange={this.updateText('numOfBathrooms')} />
            </label>
          </div>
          <label className="form-textbox">About
            <textarea cols="50" rows="5" value={this.state.about} onChange={this.updateText('about')}></textarea>
          </label>
          <label className="form-textbox">Nearby Attractions
            <textarea cols="50" rows="5" value={this.state.nearbyAttractions} onChange={this.updateText('nearbyAttractions')}></textarea>
          </label>
          <label className="form-textbox">Rules
            <textarea cols="50" rows="5" value={this.state.rules} onChange={this.updateText('rules')}></textarea>
          </label>
          <div>
            <label>Check in from
              <input type="time" value={this.state.checkInFrom} onChange={this.updateText('checkInFrom')}/>
            </label>
            <label>Check out before
              <input type="time" value={this.state.checkOutBefore} onChange={this.updateText('checkOutBefore')}/>
            </label>
          </div>
          <p>Select the cancellation policy</p>
          <div>
            <input type="radio" id="strict" value="strict" name="policy" checked={this.state.cancellationPolicy === "strict" ? "checked" : ""} onChange={this.updateText('cancellationPolicy')}/>
              <label htmlFor="strict">Strict Policy: 70% refund up to 14 days before confirmed arrival date, then 30% up to 1 day prior to the confirmed check-in date. In both cases, the refund excludes pridefulb&b service fee paid by the guest and by the host. If the stay is interrupted, the guest will have no right to receive a refund.</label>
          </div>
          <br />
          <div>
            <input type="radio" id="flexible" value="flexible" name="policy" checked={this.state.cancellationPolicy === "flexible" ? "checked" : ""} onChange={this.updateText('cancellationPolicy')} />
              <label htmlFor="flexible" value="flexible">Flexible Policy: Full refund up to 7 days prior to check-in if booked with prepayment at least 10 days before check-in. Full refund excludes cancellation fee if booking paid upfront or if booked 9 days or less before check-in and cancelled more than 7 days prior to check-in. If cancellation between 6 and 1 day prior to checkin, 50% refund (excluding cancellation fee). No refund if guests interrupt their stay. The cancellation insurance fee is non refundable.</label>
          </div>
          <br />
          <input type="file" onChange={this.updateText('imageUrl')} multiple />
          <input type="submit" value="Create Place" onClick={this.handleSubmit}/>
        </div>

      </div>
    )
  }
}

export default PlaceCreate;