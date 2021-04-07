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

  render(){

    return(
      <div className="login-form">
        <h2>Log in</h2>

        <form>
          <label>E-mail
            <input type="text" value={this.state.email} onChange={this.update('email')} />
          </label>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
          <button onClick={this.handleSubmit}>LOG IN</button>
        </form>
      </div>
    )


    }
}

export default LogIn;