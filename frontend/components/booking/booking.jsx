import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './booking_calendar_styling.css';
import { withRouter } from 'react-router-dom';

class Booking extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      startStay: null,
      endStay: null,
      numGuests: 1,
      totalCost: 0,
      displayTotal: false
    }

    this.updateTotalCost = this.updateTotalCost.bind(this);
    this.updateGuests = this.updateGuests.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }


  updateTotalCost(){
    if (this.state.focusedInput){ 
      this.setState({displayTotal: false})
    }else if (this.state.startStay === null || this.state.startStay === null){

    }else{
      let startDate = new Date(`${this.state.startStay}`)
      let endDate = new Date(`${this.state.endStay}`)
      let diffTime = Math.abs(endDate - startDate);
      let numOfNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      this.setState({
        numOfNights: numOfNights,
        totalCost: numOfNights * this.props.place.pricePerDay,
        displayTotal: true
      })

    }
  }

  updateGuests(e){
    e.preventDefault();
    this.setState({numGuests: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.clearErrors()
    if(!this.props.currentUser){
      return this.props.history.push(`/login`)
    }else{
      let booking = {
        startStay: !this.state.startStay ? null : this.state.startStay.format('YYYY-MM-DD'),
        endStay: !this.state.endStay ? null : this.state.endStay.format('YYYY-MM-DD'),
        travelerId: this.props.currentUser.id,
        numGuests: this.state.numGuests,
        totalCost: this.state.totalCost,
        placeId: this.props.place.id
      };

      this.props.createBooking(booking);


    }
  }

  showErrors() {
    return (
      <ul className="errors-container">
        {this.props.errors.map((error, i) => (
          <li key={i} className="errors">{error}</li>
        ))}
      </ul>
    )
  }


  render(){
    let total;
    let formHeader = (
      <div id="booking-form-header">
        <p><b>Add dates for prices</b></p>
      </div>
    )
    if(this.state.displayTotal && this.state.startStay && this.state.endStay){
      total = (
        <div className="total">
          <p>{`Total for ${this.state.numOfNights} ${this.state.numOfNights === 1 ? "night" : "nights"}`}</p> 
          <p>{`$${this.state.displayTotal ? this.state.totalCost : ""}`}</p>
        </div>
      )

      formHeader = (
        <div id="booking-form-header-after">
          <p><b>${this.props.place.pricePerDay}</b> per night</p>
        </div>
      )
    }

    let guestOptions = [];
    for(let i = 1; i <= this.props.place.maxGuests; i++){
      guestOptions.push(<option value={`${i}`} key={i}>{i}</option>)
    }

    return(
      <div className="booking-form">
        
        <div className="booking-form-container">
          {this.showErrors()}
          {formHeader}
          <div className="calendar-guest">
            <div className="calendar">
              <DateRangePicker
              startDate={this.state.startStay} // momentPropTypes.momentObj or null,
              startDateId="search_start"
              endDate={this.state.endStay} // momentPropTypes.momentObj or null,
              endDateId="search_end"
              onDatesChange={({ startDate, endDate }) => this.setState({ startStay: startDate, endStay: endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => {this.setState({ focusedInput }, this.updateTotalCost)}} // PropTypes.func.isRequired,
              startDatePlaceholderText="Check-in"
              endDatePlaceholderText="Checkout"
              noBorder={false}
              hideKeyboardShortcutsPanel={false}
              anchorDirection="right"
              block
              readOnly
              daySize={50}
              />
            </div>
            <div className="guest">
              <select onChange={this.updateGuests} id="guest-select">
                {guestOptions}
              </select>
            </div>
          </div>
          {total}
          <button className="booking-button" onClick={this.handleSubmit}>SEND REQUEST</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Booking);