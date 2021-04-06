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
      </div>
    );
  }
};

export default Signup;