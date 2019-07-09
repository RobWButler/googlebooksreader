import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>   
    <div>    
      
      <Switch>      
        <Route exact path="/" component={Home} />
        <Route exact path="/Saved" component={Saved} />
        <Route exact path="/Search" component={Search} />
        <Route component={NoMatch}/>
      </Switch>

    </div>
    </Router>

  )
}

export default App;
