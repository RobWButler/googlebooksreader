import React from "react";

function Header(){
    return(
        <div className="banner">
            <a className="homeButton" href="/">Google Books</a>
            <a className="headerButton" href="/search">Search</a>
            <a className="headerButton" href="/saved">Saved</a>
        </div>
    )
}

export default Header;