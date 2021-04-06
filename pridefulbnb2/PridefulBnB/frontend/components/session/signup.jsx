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
            <input type="text" value={this.state.firstName} onChanged={this.update('firstName')}/>
          </label>
          <label>Last name
            <input type="text" value={this.state.lastName} onChanged={this.update('lastName')} />
          </label>
          <label>Your city
            <input type="text" value={this.state.currentLocation} onChanged={this.update('currentLocation')} />
          </label>
          <label>Your e-mail
            <input type="text" value={this.state.email} onChanged={this.update('email')} />
          </label>
          <label>Password
            <input type="password" value={this.state.password} onChanged={this.update('password')} />
          </label>
          <label>Date of birth
            <input type="date" value={this.state.birthDate} onChanged={this.update('birthDate')} />
          </label>
          <label>Phone number
            <input type="text" value={this.state.phoneNumber} onChanged={this.update('phoneNumber')} />
          </label>
          <label>Please select your gender
            <input type="radio" value={this.state.gender} onChanged={this.update('gender')} />Male
            <input type="radio" value={this.state.gender} onChanged={this.update('gender')} />Female
            <input type="radio" value={this.state.gender} onChanged={this.update('gender')} />Transgender
            <input type="radio" value={this.state.gender} onChanged={this.update('gender')} />Other
          </label>
          <label>What do you identify as?
            <input type="radio" value={this.state.identity} onChanged={this.update('identity')} />LGBTQ+
            <input type="radio" value={this.state.identity} onChanged={this.update('identity')} />LGBTQ+ Ally
          </label>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
};

export default Signup;