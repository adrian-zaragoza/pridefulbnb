import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session';
import LogIn from './login';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    demoUser: () => dispatch(login({ email: "demouser@demo.com", password:"thisisfordemo123"}))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);