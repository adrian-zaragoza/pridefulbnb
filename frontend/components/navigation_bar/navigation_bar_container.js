import React from 'react';
import { connect } from 'react-redux';
import NavigationBar from './navigation_bar';
import { logout } from '../../actions/session';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)

//reducer for modal and action for modal to keep track of the state if its open or close.