import React from 'react';
//import shield from "../../../app/assets/images/shield.png";

export default () => (
  <div className="home">
    <div className="icon-bar">

      <div className="icon">
        <img src="../../../app/assets/images/shield.png" alt="shield icon" />
        <p>New free cancellation policy.</p>
        <br/>
        <p>Covid 19 Safety Protocol</p>
      </div>
      <div className="icon">
        <img src={window.shieldIcon} alt="people connection icon" />
        <p>{"Connect with other pridefulb&b"}</p>
        <br />
        <p>travelers during your trip</p>
      </div>
      <div className="icon">
        {/* <img src={shield} alt="rainbow icon" /> */}
        <p>Help LGBTQ nonprofits</p>
        <br />
        <p>when you book</p>
      </div>
      <div className="icon">
        <img src="../../../app/assets/images/invoice.svg" alt="invoice icon" />
        <p>Discreet invoicing</p>
      </div>
      
    </div>

  </div>
)