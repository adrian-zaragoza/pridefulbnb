import {connect} from 'react-redux';
import { createNewUser, clearErrors } from '../../actions/session';
import Signup from './signup';

const mapStateToProps =({errors}, ownProps) =>{
  return {
    errors: errors.session,
    signupModalForm: ownProps.signupModalForm,
    handleLoginSignupForms: ownProps.handleLoginSignupForms
  }
}

const mapDispatchtoProps = (dispatch) => ({
  createNewUser: (formUser) => dispatch(createNewUser(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchtoProps)(Signup);