import React from 'react';
import SearchContainer from "../search/search_container";
import { withRouter } from 'react-router-dom';

class MainGallery extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchPlaceLocation: ""
    }

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchInput(e){
    e.preventDefault();
    this.setState({searchPlaceLocation: e.currentTarget.value})
  }

  handleSearchSubmit(e){
    e.preventDefault();
    sessionStorage.setItem('searchPlaceLocation', this.state.searchPlaceLocation)
    this.props.history.push({pathname: '/search', state: {searchPlaceLocation: this.state.searchPlaceLocation}});
  }
   
  render(){
    return(
      <div className="main-gallery">
        <div className="overlay-gallery">
          <h1>Experience a More Welcoming World</h1>
          <br />
          <h2>{"From private rooms & apartments to LGBTQ-friendly hotels: search through "}<b>1 million</b> listings in 200 countries</h2>
          <br />

        
          <form className="search-form" >
            <label><p> <img src={window.prideBannerIcon} alt="pride banner" />Where do you want to go?</p>
              <input type="text" value={this.state.searchPlaceLocation} onChange={this.handleSearchInput}/>
            </label>
            <button className="search-button" onClick={this.handleSearchSubmit}>SEARCH</button>
            {/* {this.state.toggleSearch ? <SearchContainer searchPlaceLocation={this.state.searchPlaceLocation} /> : ""} */}
          </form>
        </div>

        <div className="image-container">
          <img src={window.groupWalking} alt="group walking on concrete" />
        </div>
      
        <div className="image-container">
          <img src={window.coupleBeach} alt="lesbian couple walking in the beach" />
        </div>

        <div className="image-container">
          <img src={window.coupleBed} alt="gay couple on bed" />
        </div>
        <div className="image-container">
          <img src={window.coupleBed2} alt="lesbian couple on bed" />
        </div>


      </div>
    )
  }
}

export default withRouter(MainGallery);

