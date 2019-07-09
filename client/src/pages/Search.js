import React, { Component } from "react";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron"
import {Input, FormBtn} from "../components/Form"
import Result from "../components/Result";
import API from "../utils/API"
import Modal from "../components/Modal";

class Search extends Component {

  state = {
    search: '',
    booksresults: ''

  }

  runSearch = () => {

    fetch("https://www.googleapis.com/books/v1/volumes?q=" + this.state.search)
    .then(res => res.json())
    .then(
      (result) => (
        this.setState({
          booksresults: result.items
        })
      )
    )

  };

  addBook = event => {
    event.preventDefault();
    const tgt = event.currentTarget
    
    API.saveBook({      
    title: tgt.getAttribute("booktitle"),
    author: tgt.getAttribute("author"),
    description: tgt.getAttribute("description"),
    image: tgt.getAttribute("image"),
    url: event.target.getAttribute("url")
  })
  .then(res => console.log(res)) 
  
  }

  handleSearchType = event => {
    event.preventDefault()
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return(
      <div>
        <Header/>

        <div className="page-container">
            <Jumbotron pagetitle="Search for Books"/>
        <hr/>
        <Modal id="modal" modal="Book saved"/>
        <Input onChange={this.handleSearchType}/> 
        <FormBtn onClick={() => this.runSearch()}>Search</FormBtn>

        <br></br>
        <hr/>

        {this.state.booksresults.length ? (
        <div className="results">
          {this.state.booksresults.map(book => (
            <Result
              id={book.id}
              key={book.id}
              url={book.volumeInfo.infoLink}
              booktitle={book.volumeInfo.title}
              image={book.volumeInfo.imageLinks.smallThumbnail}
              author={book.volumeInfo.authors ? ( book.volumeInfo.authors.join(", ") ) : ( book.volumeInfo.authors ) }
              description={book.volumeInfo.description}
              label="Save"
              onClick={this.addBook}

            />
          ))}
        </div>
        ) : ( 
          <h3>No Results</h3>
        )}
        </div>
        
      </div>
    )
  }
}

export default Search;
