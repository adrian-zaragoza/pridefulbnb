import React from 'react';
import { Link } from 'react-router-dom';

class LogIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
  }

  componentDidMount() {
    document.body.classList.add('login-page')
  }

  componentWillUnmount() {
    document.body.classList.remove('login-page')
    this.props.clearErrors();
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
    
  }

  showErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    )
  }

  render(){

    return(
      <div className="login-form">
        <h1>Log in</h1>
        {this.showErrors()}
        <form className="login-form">
          <label>E-mail
            <input type="text" value={this.state.email} onChange={this.update('email')} />
          </label>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
          <br/>
          <button onClick={this.handleSubmit} className="form-button">LOG IN</button>
        </form>
        <button onClick={this.props.demoUser} className="form-button">DEMO LOG IN</button>
        <div className="signup-redirec-data">
          <p>Don't have an account?</p>
          <Link className="signup-redirec" to="/signup">Sign up</Link>
        </div>
      
      </div>

      
    )


    }
}

export default LogIn;