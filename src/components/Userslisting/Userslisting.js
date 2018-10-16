import React, { Component } from "react";
import UsersListCircle from "./UsersListCircle"
import "./Users.css"
import Button from "../Button";

const query = `users`;
const URL = `http://hellotechnigo.comprendwebsites.net/api/${query}`;


class Userslisting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      usersToLoad: 20
    };
}
   componentDidMount() {
     fetch(URL)
     .then(response => response.json())
     .then(responseData => {this.setState({users: responseData});
   })
   .catch(error => {
     console.log('Error fetching and parsing data', error);
   });
 }

 handleClickLoadMore = () => {
     this.setState({
       usersToLoad: this.state.usersToLoad += 20
     })
}

  render() {
    console.log(this.state.users)

    return (
      <div>
        <div className="main-content">
          <div className="user-title">
              <h1>Meet some of the people of Comprend</h1>
              <p>80 COWORKERS</p>
            </div>
          <UsersListCircle data={this.state.users.slice(0, this.state.usersToLoad)} />
        </div>

          <div className="centered-button">
            <Button onClick={this.handleClickLoadMore}> Load More Colleagues </Button>
          </div>
        </div>
    )
}
}


export default Userslisting
