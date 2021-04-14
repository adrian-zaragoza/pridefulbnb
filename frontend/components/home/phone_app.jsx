import React from 'react';

export default () => (
  <div className="phone-app">
    <figure>
      <img src={window.phoneApp} alt="phone application"/>
    </figure>
    <div className="phone-app-description">
      <h1>Featured as App of the day by Apple (2018 & 2019)</h1>
      <div className="phone-app-buttons">
        <figure>
          <img src={window.googleStore} alt="google store button"/>
        </figure>
        <figure>
          <img src={window.appleStore} alt="google store button" />
        </figure>
      </div>
      <h2>Book with a tap. Download our app now.</h2>
    </div>
  </div>
)