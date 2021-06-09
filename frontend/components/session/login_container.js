import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../actions/session';
import LogIn from './login';
import sessionErrorsReducer from '../../reducers/session_errors_reducer';

const mapStateToProps = ({errors}, ownProps) => {
  return {
    errors: errors.session,
    handleLoginSignupForms: ownProps.handleLoginSignupForms,
    loginModalForm: ownProps.loginModalForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    demoUser: () => dispatch(login({ email: "demouser@demo.com", password:"thisisfordemo123"}))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);