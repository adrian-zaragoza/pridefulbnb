import React from 'react';
import { connect } from 'react-redux';
import NavigationBar from './navigation_bar';
import { logout, login } from '../../actions/session';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  demoUser: () => dispatch(login({ email: "demouser@demo.com", password: "thisisfordemo123" }))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)

