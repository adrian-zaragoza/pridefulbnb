import React from 'react';

class ReviewIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllReviews(this.props.placeId)
  }

  

  render(){

    return(
      <div><h1>Inside the Review Index</h1></div>
    )
  }
}

export default ReviewIndex;