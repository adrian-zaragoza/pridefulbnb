import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ currentUser, logout, demoUser}) => {
  // let demoUser = new FormData();
  // demoUser.append("email", "demouser@demo.com");
  // demoUser.append("password", "thisisfordemo123");
  
  let display = (
    <div className="nav-bar">
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
      <button onClick={demoUser}>Demo Log In</button>
    </div>
  )

  if(currentUser){
    display = (
      <div className ="nav-bar">
        <p>{currentUser.firstName}</p>
        <button onClick={logout}>Logout</button>
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