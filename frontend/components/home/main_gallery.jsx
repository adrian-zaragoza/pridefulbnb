import React from 'react';

export default () => (
  
   
  <div className="main-gallery">
    
    <div className="overlay-gallery">
      <h1>Experience a More Welcoming World</h1>
      <br />
      <h2>{"From private rooms & apartments to LGBTQ-friendly hotels: search through "}<b>1 million</b> listings in 200 countries</h2>
      <br />

     
      <form className="search-form">
        <label><p> <img src={window.prideBannerIcon} alt="pride banner" />Where do you want to go?</p>
            <input type="text"  />
        </label>
        <button className="search-button">SEARCH</button>
      </form>
    </div>

    <div className="image-container">
      <img src={window.groupWalking} alt="group walking on concrete" />
    </div>
   
    <div className="image-container">
      <img src={window.coupleBeach} alt="lesbian couple walking in the beach" />
    </div>

    <div className="image-container">
      <img src={window.coupleBed} alt="gay couple on bed" />
    </div>
    <div className="image-container">
      <img src={window.coupleBed2} alt="lesbian couple on bed" />
    </div>


  </div>
)