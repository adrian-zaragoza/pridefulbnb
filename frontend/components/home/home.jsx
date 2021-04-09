import React from 'react';

export default () => (
  <div className="home">
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

  </div>
)