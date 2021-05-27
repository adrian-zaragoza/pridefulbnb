import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

class Booking extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      startStay: null,
      endStay: null,
      numGuests: 1,
      totalCost: 0,
      travelerId: "",
      displayTotal: false
    }

    this.updateTotalCost = this.updateTotalCost.bind(this);
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
      console.log("total cost", numOfNights * this.props.place.pricePerDay)
      this.setState({
        numOfNights: numOfNights,
        totalCost: numOfNights * this.props.place.pricePerDay,
        displayTotal: true
      })

    }
  }








  render(){
    let total;
    if(this.state.displayTotal){
      total = (
        <div className="total">
          <p>{`Total for ${this.state.numOfNights} ${this.state.numOfNights === 1 ? "night" : "nights"}`}</p> 
          <p>{this.state.displayTotal ? this.state.totalCost : ""}</p>
        </div>
      )
    }

    let guestOptions = [];
    for(let i = 1; i <= this.props.place.maxGuests; i++){
      guestOptions.push(<option value={`${i}`} key={i}>{i}</option>)
    }

    return(
      <div className="booking-form">
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
            startDatePlaceholderText="Add dates"
            endDatePlaceholderText="Add dates"
            noBorder={false}
            hideKeyboardShortcutsPanel={false}
            anchorDirection="right"
            block
            readOnly
            daySize={50}
            />
          </div>
          <div className="guest">
            <select defaultValue="1">
              {guestOptions}
            </select>
          </div>
        </div>
        {total}
        <button className="search-button">SEND REQUEST</button>
      </div>
    )
  }
}

export default Booking;