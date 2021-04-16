import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ currentUser, logout, demoUser, props}) => {
  let homeButton = undefined;
  if(props.pathname != "/"){
    homeButton = (
      <Link className="nav-button" to="/">Home</Link>
    )
  }

  let placesButton = undefined;
  if(props.pathname != "/places"){
    placesButton = (<Link className="nav-button" to="/places">Places</Link>)
  }
  
  let display = (
    <div className="nav-bar-links">
      {homeButton}
      {placesButton}
      <Link className="nav-button" to="/signup">Sign Up</Link>
      <Link className="nav-button" to="/login">Log In</Link>
      <button onClick={demoUser} className="nav-button">Demo Log In</button>
    </div>
  )

  if(currentUser){
    display = (
      <div className ="nav-bar-links">
        {homeButton}
        {placesButton}
        <p className ="user-name">{`Hi, ${currentUser.firstName}`}</p>
        <button onClick={logout} className="nav-button">Logout</button>
      </div>
    )
  }

  return (
    <div className="nav-bar">
      <div>
        <Link className="logo" to="/"><h1>{"pridefulb&b"}</h1></Link>
      </div>
      {display}
    </div>
  );
};

export default NavigationBar;