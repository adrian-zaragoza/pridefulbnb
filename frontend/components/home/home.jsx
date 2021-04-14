import React from 'react';
import MainGallery from './main_gallery';
import Accomodations from './accomodations';
import PhoneApp from './phone_app';
import Blogs from './blogs';

export default () => (
  <div className="home">
    <MainGallery />
    <div className="icon-bar">

      <div className="icon">
        <img src={window.shieldIcon} alt="shield icon" />
        <p>New free cancellation policy.</p>
        <p>Covid 19 Safety Protocol</p>
      </div>
      <div className="icon">
        <img src={window.connectionIcon} alt="people connection icon" />
        <p>{"Connect with other pridefulb&b"}</p>
        <p>travelers during your trip</p>
      </div>
      <div className="icon">
        <img src={window.rainbowIcon} alt="rainbow icon" />
        <p>Help LGBTQ nonprofits</p>
        <p>when you book</p>
      </div>
      <div className="icon">
        <img src={window.invoiceIcon} alt="invoice icon" />
        <p>Discreet invoicing</p>
      </div>
      
    </div>

    <div className="trustpilot-rating">
      <span className="trustpilot-reviews">
        Rated <b>Excellent </b>
      <img src={window.starsTrustpilotRating} alt="trustpilot rating stars" className="trustpilot-stars"/>
        Based on <b> 1,700+ reviews </b> on
      <img src={window.trustpilotLogo} alt="trustpilot logo"/>
      </span>
    </div>

    <Accomodations />
    <PhoneApp />
    <Blogs />

  </div>
)