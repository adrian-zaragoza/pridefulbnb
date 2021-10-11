import React from 'react';
import Review from './review';

class ReviewIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    // this.props.fetchAllReviews({placeId: this.props.placeId});
  }

  

  

  render(){

    let reviews;

    if(!this.props.reviews || this.props.reviews.length === 0){
      reviews = (
        <div>
          <p>Be the first to review this property!</p>
          <p>
            The hosts took the time to best showcase their accommodation. Their home is now ready for your
            stay and they look forward to welcoming you as their first misterb&b guest!
          </p>
        </div>
      )
    }else{
      reviews = this.props.reviews.map((review) => {
        return(
          <Review key={`reviewId-${review.id}`} firstName={review.authorFirstName} body={review.body} date={review.updatedAt} />
        )
        
      })
    }

    return(
      <div>
        <h2>Reviews</h2>
        <ul>
          {reviews}
        </ul>
        
      </div>
    )
  }
}

export default ReviewIndex;