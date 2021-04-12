import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './navigation_bar/navigation_bar_container';
import Home from './home/home';
import Error from './error/error';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import {withRouter} from 'react-router-dom';

const App = withRouter(({location}) =>{ 
  return(
  <div className="app">
    {
      location.pathname != '/login' && location.pathname != '/signup' && <NavBarContainer />
    }
    <Switch>
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <Route  exact path="/" component={Home} />
      <Route  path="/error" component={Error} />
      <Redirect to="/error"/>
    </Switch>
  </div>
  );
});

export default App;