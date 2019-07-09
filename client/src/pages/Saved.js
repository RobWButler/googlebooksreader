import React, { Component } from "react";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron"
import Result from "../components/Result";
import API from "../utils/API"


class Saved extends Component {
  state = {
    savedBooks: ""
  }

  componentDidMount = () => {
    this.getBooks()
  }

  getBooks = () =>{
    API.getBooks()
      .then(res => this.setState({ savedBooks: res.data}))
      .catch(err => console.log(err));
  }

  deleteBook = id => {
    API.deleteBook(id)
    .then(res => this.getBooks())
    console.log("deleted book")
  }

  render(){
    return (
      <div>
        <Header/>

        <div className="page-container">
          <Jumbotron pagetitle="Saved Books"/>
        <hr/>

         {this.state.savedBooks.length ? (
          <div className="results">
            {this.state.savedBooks.map(book => (
              <Result
                key={book._id}
                id={book._id}
                url={book.url}
                booktitle={book.title}
                author={book.author}
                description={book.description}
                image={book.image}
                label="Remove"
                onClick={() => this.deleteBook(book._id)}
              />
            ))}
          </div>
        ) : ( 
          <h4>No saved books. Go to the <a href="/search">Search</a> page to find some!</h4>
        )}
        </div>
        
      </div>
    );
  }
}

export default Saved;
