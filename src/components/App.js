import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import Listing from "./Listing"
import Posting from "./Posting"
import AboutUs from "./AboutUs"
import Userslisting from "./Userslisting"
import Button from "./Button";
import Grid from './Grid'
import SocialFooter from "./SocialFooter/SocialFooter";
import MediaQuery from 'react-responsive'
import PageNotFound from './PageNotFound'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path="/" component={AboutUs} />
            <Route exact path="/users" component={Userslisting}/>
            <Route exact path="/jobs" component={Listing}/>
            <Route path="/job/:id" component={Posting}/>
            <Route component={PageNotFound} />
          </Switch>

          <SocialFooter/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
