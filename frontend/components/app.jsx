import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './navigation_bar/navigation_bar_container';
import Home from './home/home';

const App = () => (
  <div className="app">
    <Switch>
      <Route path="/signup" component={SignupContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/" component={NavBarContainer}/>
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;