import React from 'react';

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state).then(this.props.history.push('/'))
  };


  render(){
    return(
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
            <input type="radio" name="gender" value={this.state.gender} onChange={this.update('gender')} />Male
            <input type="radio" name="gender" value={this.state.gender} onChange={this.update('gender')} />Female
            <input type="radio" name="gender" value={this.state.gender} onChange={this.update('gender')} />Transgender
            <input type="radio" name="gender" value={this.state.gender} onChange={this.update('gender')} />Other
          </label>
          <label>What do you identify as?
            <input type="radio" name="identity" value={this.state.identity} onChange={this.update('identity')} />LGBTQ+
            <input type="radio" name="identity" value={this.state.identity} onChange={this.update('identity')} />LGBTQ+ Ally
          </label>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
};

export default Signup;