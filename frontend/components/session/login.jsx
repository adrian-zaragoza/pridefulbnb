import React from 'react';

class LogIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(this.props.history.push('/'))
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
        <h2>Log in</h2>
        {this.showErrors()}
        <form>
          <label>E-mail
            <input type="text" value={this.state.email} onChange={this.update('email')} />
          </label>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
          <button onClick={this.handleSubmit} className="form-button">LOG IN</button>
        </form>
        <button onClick={this.props.demoUser} className="form-button">DEMO LOG IN</button>
      </div>
    )


    }
}

export default LogIn;