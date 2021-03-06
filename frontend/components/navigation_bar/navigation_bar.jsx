import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/all';
import SignUpContainer from '../session/signup_container';
import LogInContainer from '../session/login_container';

class NavigationBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchPlaceLocation: "",
      signupModalForm: false,
      loginModalForm: false
    }
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleLoginSignupForms = this.handleLoginSignupForms.bind(this);
  }

  handleSearchInput(e){
    e.preventDefault();
    this.setState({searchPlaceLocation: e.currentTarget.value})
  }

  componentWillUnmount(){
    this.setState({searchPlaceLocation: ""});
  }

  handleLoginSignupForms(type){

    if(type === "login"){
      this.setState({loginModalForm: !this.state.loginModalForm}, ()=>{
        if(this.state.loginModalForm){
          return document.querySelector("body").style.overflow = 'hidden';
        }else{
          return document.querySelector("body").style.overflow = 'auto';
        }
      })
    }else{
      this.setState({signupModalForm: !this.state.signupModalForm}, ()=>{
        if(this.state.signupModalForm){
          return document.querySelector("body").style.overflow = 'hidden';
        }else{
          return document.querySelector("body").style.overflow = 'auto';
        }
      })
    }
    

  }

  handleSearchSubmit(e){
    e.preventDefault();
    sessionStorage.setItem('searchPlaceLocation', this.state.searchPlaceLocation);
    this.props.history.replace({pathname: '/search', state: {searchPlaceLocation: this.state.searchPlaceLocation}});
    this.setState({searchPlaceLocation: ""});
  }



  render(){
  let homeButton = undefined;
  let searchBar;
  if(this.props.location.pathname != "/"){
    homeButton = (
      <Link className="nav-button" to="/">Home</Link>
    )

    searchBar = (
          <form onSubmit={this.handleSearchSubmit} id="nav-search">
            <label>
              <input type="text" value={this.state.searchPlaceLocation} onChange={this.handleSearchInput} placeholder="Where do you want to go?"/>
            </label>
            {/* <button className="search-button" onClick={this.handleSearchSubmit}>SEARCH</button> */}
            {/* {this.state.toggleSearch ? <SearchContainer searchPlaceLocation={this.state.searchPlaceLocation} /> : ""} */}
          </form>
    )
  }

  let placesButton = undefined;
  if(this.props.location.pathname != "/places"){
    placesButton = (<Link className="nav-button" to="/places">Places</Link>)
  }
  
  let display = (
    <div className="nav-bar-links">
      {homeButton}
      {placesButton}
      {/* <Link className="nav-button" to="/signup">Sign Up</Link>
      <Link className="nav-button" to="/login">Log In</Link> */}
      <button className="nav-button" onClick={(e) => this.handleLoginSignupForms("signup", e)}>Sign Up</button>
      <button className="nav-button" onClick={(e) => this.handleLoginSignupForms("login", e)}>Log In</button>
      <button onClick={this.props.demoUser} className="nav-button">Demo Log In</button>
    </div>
  )

  if(this.props.currentUser){
    display = (
      <div className ="nav-bar-links">
        {homeButton}
        {placesButton}
        <div className="dropdown">
          <button className="dropbtn">{`Hi, ${this.props.currentUser.firstName}`} <AiOutlineDown /> </button>
          <div className="dropdown-content">
            <Link className="dropdown-item" to={`/users/${this.props.currentUser.id}/travels`} >My Travels</Link>
          </div>
        </div>
        {/* <p className ="user-name">{`Hi, ${this.props.currentUser.firstName}`}</p> */}
        <button onClick={this.props.logout} className="nav-button">Logout</button>
      </div>
    )
  }
 
  return (
    <div className="nav-bar">
      <div className="logo-and-search">
        <Link className="logo" to="/"><h1>{"pridefulb&b"}</h1></Link>
        {searchBar}
      </div>
      {display}
      {this.state.signupModalForm ? <SignUpContainer signupModalForm={this.state.signupModalForm} handleLoginSignupForms={this.handleLoginSignupForms}  /> : ""}
      {this.state.loginModalForm ? <LogInContainer loginModalForm={this.state.loginModalForm} handleLoginSignupForms={this.handleLoginSignupForms}  /> : ""}
    </div>

  )};



};

export default withRouter(NavigationBar);