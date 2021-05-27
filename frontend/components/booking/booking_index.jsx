import React from 'react';

class BookingIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUserBookings(this.props.currentUser.id)
  }

  render(){

    return(
      <div>
        In Booking Index
      </div>
    )
  }
}

export default BookingIndex;