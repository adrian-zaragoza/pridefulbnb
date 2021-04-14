import React from 'react';

export default () => (
  <div className="accomodations-info">
  <h2>Find welcoming accommodations that fit your style & budget</h2>
  <ul>
      <li>310,000 LGBTQ hosts</li>
      <li>100,000 LGBTQ-friendly hotel rooms</li>
      <li>270,000 reviews from LGBTQ travelers</li>
  </ul>
  <div className="accomodation-pictures">
    <div className="accomodation-group">
    <figure className="accomodation-picture">
        <img src={window.privateRoom} alt="private room"/>
      <div className="accomodation-overlay">
        <h3>PRIVATE ROOMS</h3>
        <p>Starting from $20</p>
      </div>
    </figure>
    <figure className="accomodation-picture">
      <img src={window.lgbtqHotel} alt="lgbtq hotel"/>
      <div className="accomodation-overlay">
        <h3>LGBTQ HOTELS</h3>
        <p>Starting from $60</p>
      </div>
    </figure>
    <figure className="accomodation-picture">
        <img src={window.clothingOptional} alt="shirtless man"/>
      <div className="accomodation-overlay">
        <h3>CLOTHING OPTIONAL</h3>
        <p>Starting from $20</p>
      </div>
    </figure>
    </div>

    <div className="accomodation-group">
    <figure className="accomodation-picture">
        <img src={window.apartment} alt="apartment"/>
      <div className="accomodation-overlay">
        <h3>APARTMENTS</h3>
        <p>Starting from $30</p>
      </div>
    </figure>
    <figure className="accomodation-picture">
      <img src={window.lgbtqResort} alt="lgbtq resort"/>
      <div className="accomodation-overlay">
        <h3>LGBTQ RESORTS</h3>
        <p>Starting from $30</p>
      </div>
    </figure>
    <figure className="accomodation-picture">
      <img src={window.villas} alt="villas at sunset"/>
      <div className="accomodation-overlay">
        <h3>VILLAS</h3>
        <p>Starting from $95</p>
      </div>
    </figure>
    </div>
  </div>
  
  </div>
)

