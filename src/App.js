import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Flavors from "./components/Flavors";
import homeImage1 from "./images/homeImage1.jpg";


function App() {

    return (
      <div className="App">
          <Router>
              <Navbar/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/Contact' component={Contact} exact/>
            <Route path='/About' component={About} exact/>
            <Route path='/Flavors' component={Flavors} exact/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
