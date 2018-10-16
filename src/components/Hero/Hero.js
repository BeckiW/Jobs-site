import React, { Component } from "react";
import "./Hero.css";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
          <div className="hero-image">
            <img src="comprend.jpg" />
            <div className="hero-text"><h1>Join us</h1></div>
          </div>
      </div>
    )
  }
}

export default Hero
