import React from "react";
import "./App.css";

import SavedBooks from "./views/SavedBooks";
import SearchBooks from "./views/SearchBooks";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
     <Navbar/>
     <Jumbotron/>   
    <Switch>
      <Route path="/searchbooks">
        <SearchBooks/>
       </Route> 
      <Route path="/savedbooks">
        <SavedBooks/>
      </Route> 
    </Switch>
    </div>
    </Router>
  );
}


export default App;
