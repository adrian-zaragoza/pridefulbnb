import React from 'react';
import SignUpModal from '../modal/modal';

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      currentLocation: '',
      phoneNumber: '',
      gender: '',
      identity: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    }
  };

  modalOpen(){
    this.setState({modal: true});
  };

  modalClose(){
    this.setState({modal: false});
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state).then(this.props.history.push('/'))
    this.modalClose();
  };


  render(){
    return(
      <SignUpModal available={this.state.modal} modalClose={() => this.modalClose()}>
        <div className="signup-form">
          <h2>Enjoy the full experience of LGBTQ hospitality</h2>
          <p>1 million LGBTQ-friendly accommodations in 200 countries.</p>

          <form>
            <label>First name
              <input type="text" value={this.state.firstName} onChange={this.update('firstName')}/>
            </label>
            <label>Last name
              <input type="text" value={this.state.lastName} onChange={this.update('lastName')} />
            </label>
            <label>Your city
              <input type="text" value={this.state.currentLocation} onChange={this.update('currentLocation')} />
            </label>
            <label>Your e-mail
              <input type="text" value={this.state.email} onChange={this.update('email')} />
            </label>
            <label>Password
              <input type="password" value={this.state.password} onChange={this.update('password')} />
            </label>
            <label>Date of birth
              <input type="date" value={this.state.birthDate} onChange={this.update('birthDate')} />
            </label>
            <label>Phone number
              <input type="text" value={this.state.phoneNumber} onChange={this.update('phoneNumber')} />
            </label>
            <label>Please select your gender
              <input type="radio" name="gender" value="male" onChange={this.update('gender')} />Male
              <input type="radio" name="gender" value="female" onChange={this.update('gender')} />Female
              <input type="radio" name="gender" value="trans" onChange={this.update('gender')} />Trans
              <input type="radio" name="gender" value="other" onChange={this.update('gender')} />Other
            </label>
            <label>What do you identify as?
              <input type="radio" name="identity" value="lgbtq+" onChange={this.update('identity')} />LGBTQ+
              <input type="radio" name="identity" value="lgbtq+ Ally" onChange={this.update('identity')} />LGBTQ+ Ally
            </label>
            <button onClick={this.handleSubmit}>Sign Up</button>
          </form>

        </div>
      </SignUpModal>
    );
  }
};

export default Signup;