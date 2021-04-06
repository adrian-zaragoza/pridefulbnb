import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';

const App = () => (
  <div>
    <Route path="/signup" component={SignupContainer} />
  </div>
);

export default App;