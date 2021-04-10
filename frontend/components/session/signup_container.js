import {connect} from 'react-redux';
import { createNewUser, clearErrors } from '../../actions/session';
import Signup from './signup';

const mapStateToProps =({errors}) =>{
  return {
    errors: errors.session
  }
}

const mapDispatchtoProps = (dispatch) => ({
  createNewUser: (formUser) => dispatch(createNewUser(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchtoProps)(Signup);