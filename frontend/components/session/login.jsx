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
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(()=> this.props.handleLoginSignupForms("login", e));
    
  }

  showErrors(){
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    )
  }

  handleSignupClick(e){
    e.preventDefault();
    this.props.handleLoginSignupForms("login", e)
    this.props.handleLoginSignupForms("signup", e)
  }

  render(){

    return(
      <div className={this.props.loginModalForm ? "signup-form-container" : "hidden"}>
        <button className="close" onClick={(e) => this.props.handleLoginSignupForms("login", e)} >X</button>
        <div className="modal-content-signup">
          <div className="title-errors">
            <h1><img src={prideBannerIcon} alt="pride banner icon"/>Log in</h1>
            {this.showErrors()}
          </div>
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
          <button onClick={(e) => this.props.demoUser().then(()=>this.props.handleLoginSignupForms("login", e))} className="form-button">DEMO LOG IN</button>
          <div className="signup-redirec-data">
            <p>Don't have an account?</p>
            <a className="signup-redirec" onClick={this.handleSignupClick} >Sign up</a>
          </div>
        </div>
      </div>

      
    )


    }
}

export default LogIn;