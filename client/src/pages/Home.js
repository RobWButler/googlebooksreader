import React, { Component } from "react";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron"

class Home extends Component {

  render() {
    return (
      <div>
        <Header/>

        <div className="page-container">
          <Jumbotron pagetitle="Welcome to Google Books Search"/>
          <hr/>
        <div className="">
          <a href="/search">Search for Books</a> <br/>
          <a href="/saved">View Books You've Saved</a>
        </div>
        </div>


      </div>
    );
  }
}

export default Home;
