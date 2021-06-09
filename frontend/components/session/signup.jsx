import React from 'react';
import { Link } from 'react-router-dom';

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
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  componentDidMount(){

  }

  componentWillUnmount(){
    this.props.clearErrors()
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    }
  };


  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state).then(()=> this.props.handleLoginSignupForms("signup", e))
  };

  showErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    )
  }

  handleLoginClick(e){
    e.preventDefault();
    this.props.handleLoginSignupForms("signup", e);
    this.props.handleLoginSignupForms("login", e);
  }


  render(){
    return(
        <div className={this.props.signupModalForm ? "signup-form-container" : "hidden"}>
          <button className="close" onClick={(e) => this.props.handleLoginSignupForms("signup", e)} >X</button>
          <div className="modal-content-signup">
            <h1>Enjoy the full experience of LGBTQ hospitality</h1>
            <br/>
            <p><img src={prideBannerIcon} alt="pride banner icon"/>1 million LGBTQ-friendly accommodations in 200 countries.</p>
            {this.showErrors()}
            <form className="signup-form">
              <label>First name
                <br/>
                <input type="text" value={this.state.firstName} onChange={this.update('firstName')}/>
              </label>
              <label>Last name
                <br/>
                <input type="text" value={this.state.lastName} onChange={this.update('lastName')} />
              </label>
              <label>Your city
                <br/>
                <input type="text" value={this.state.currentLocation} onChange={this.update('currentLocation')} />
              </label>
              <br/>
              <label>Your e-mail
                <br/>
                <input type="text" value={this.state.email} onChange={this.update('email')} />
              </label>
              <label>Password
                <br/>
                <input type="password" value={this.state.password} onChange={this.update('password')} />
              </label>
              <br/>
              <label>Date of birth
                <br/>
                <input type="date" value={this.state.birthDate} onChange={this.update('birthDate')} />
              </label>
              <label>Phone number
                <br/>
                <input type="text" value={this.state.phoneNumber} onChange={this.update('phoneNumber')} placeholder="e.g. 8053239585" />
              </label>
              <br/>
              <label>Please select your gender
                <input type="radio" name="gender" value="male" onChange={this.update('gender')} />Male
                <input type="radio" name="gender" value="female" onChange={this.update('gender')} />Female
                <input type="radio" name="gender" value="trans" onChange={this.update('gender')} />Trans
                <input type="radio" name="gender" value="other" onChange={this.update('gender')} />Other
              </label>
              <br/>
              <label>What do you identify as?
                <input type="radio" name="identity" value="lgbtq+" onChange={this.update('identity')} />LGBTQ+
                <input type="radio" name="identity" value="lgbtq+ Ally" onChange={this.update('identity')} />LGBTQ+ Ally
              </label>
              <br/>
              <br/>
              <button onClick={this.handleSubmit}>Sign Up</button>
            </form>
            <div className="log-in-redirec-data">
              <p>Already have an account?</p>
              <a className="log-in-redirect" onClick={this.handleLoginClick}>Log in</a>
            </div>
          </div>
        </div>
    );
  }
};

export default Signup;