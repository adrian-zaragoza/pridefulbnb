import React from 'react';

export default () => (
  <div className="home">
    <div className="icon-bar">

      <div className="icon">
        {/* <img src={shield} alt="shield icon" /> */}
        <p>New free cancellation policy.</p>
        <br/>
        <p>Covid 19 Safety Protocol</p>
      </div>
      <div className="icon">
        <img src={"../../..app/assets/images/connection.svg"} alt="people connection icon" />
        <p>{"Connect with other pridefulb&b"}</p>
        <br />
        <p>travelers during your trip</p>
      </div>
      <div className="icon">
        <img src="{'../../../app/assets/images/rainbow.svg'}" alt="rainbow icon" />
        <p>Help LGBTQ nonprofits</p>
        <br />
        <p>when you book</p>
      </div>
      <div className="icon">
        <img src="{../../../app/assets/images/invoice.svg}" alt="invoice icon" />
        <p>Discreet invoicing</p>
      </div>
      
    </div>

  </div>
)