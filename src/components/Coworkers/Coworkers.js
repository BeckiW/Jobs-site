
import React, { Component } from "react"
import Header from "../Header";
import Footer from "../Footer";
import Button from "../Button";
import Users from "./Users";


const URL = `http://hellotechnigo.comprendwebsites.net/api/users`

/* Shuffle an array - i.e. randomize all of the elements like shuffling a deck of cards. */
function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class Coworkers extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    coworkers: []
  }
}


componentDidMount(){
  return fetch(URL)
  .then(response => response.json())
  .then(listings => {
    shuffleArray(listings);
    listings.splice(3);
    this.setState({coworkers: listings})
  })
}

render() {
  const Coworkers = this.state.coworkers.map((coworker) => (
    <div>
      <Users image={coworker.pictureUrl} name={coworker.name} title={coworker.title} id={coworker.id} />
    </div>
  ));


    return(

      <div className="coworkers-list">
        {Coworkers}
      </div>
    );

  }
}


export default Coworkers
