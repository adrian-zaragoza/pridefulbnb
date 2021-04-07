import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ currentUser, logout}) => {
  let display = (
    <div>
      <Link className="btn" to="/signup"></Link>
      <Link className="btn" to="/login"></Link>
    </div>
  )

  if(currentUser){
    display = (
      <div>
        <p>{currentUser.firstName}</p>
        <button onClick={logout}>Logout</button>
      </div>
    )
  }

  return (
    <header>
      <h1>pridefulbnb</h1>
      <div>
        {display}
      </div>
    </header>
  );
};

export default NavigationBar;