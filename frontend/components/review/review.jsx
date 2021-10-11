import React from 'react';
import moment from 'moment';
import {BsPersonSquare} from 'react-icons/all';

const Review = ({ firstName, body, date }) => {



  return(
    <li className="place-review">
      <div className="review-header">
        <span><BsPersonSquare /></span>
        <div className="review-author-date">
          <h3>{firstName}</h3>
          <h4>{`Reviewed on ${moment(date).format('LL')}`}</h4>
        </div>
      </div>
      <p>{body}</p>
    </li>
  );
};

export default Review;