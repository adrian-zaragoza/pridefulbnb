import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ currentUser, logout}) => {
  
  let display = (
    <div className="nav-bar">
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  )

  if(currentUser){
    display = (
      <div className ="nav-bar">
        <p>{currentUser.firstName}</p>
        <button onClick={() => logout()}>Logout</button>
      </div>
    )
  }

  return (
    <div className="nav-bar">
      {display}
    </div>
  );
};

export default NavigationBar;