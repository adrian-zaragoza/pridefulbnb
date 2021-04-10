import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ currentUser, logout, demoUser}) => {
  
  let display = (
    <div className="nav-bar-links">
      <Link className="nav-button" to="/signup">Sign Up</Link>
      <Link className="nav-button" to="/login">Log In</Link>
      <button onClick={demoUser} className="nav-button">Demo Log In</button>
    </div>
  )

  if(currentUser){
    display = (
      <div className ="nav-bar-links">
        <p className ="user-name">{`Hi, ${currentUser.firstName}`}</p>
        <button onClick={logout} className="nav-button">Logout</button>
      </div>
    )
  }

  return (
    <div className="nav-bar">
      <div className="logo">
        <h1>{"pridefulb&b"}</h1>
      </div>
      {display}
    </div>
  );
};

export default NavigationBar;