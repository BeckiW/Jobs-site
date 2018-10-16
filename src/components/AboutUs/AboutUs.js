import React, { Component } from "react";
import Button from "../Button";
import callToAction from "../calltoaction";
import "./AboutUs.css"
import InstagramFeed from "../InstagramFeed";

class AboutUs extends Component{
  render(){
    return(
      <div className="AboutUsContainer">


        <div className="hero-about">
          <div className="hero-image-about">
            <img src="test.webp" />
            <div className="hero-text-about">
              <h1>Welcome to Comprend</h1>

              <p>Are you our new coworker or just excited to see us? Head over to our jobopenings</p>
            </div>
          </div>
        </div>



        <div className="Info-text-box">
          <div className="Info-text-box1">
            <div className="Info-image1">
              <img src="idea.gif" />
            </div>
            <div className="Info-text1">
              <h3>Our belief</h3>
              <p>Our belief is that communication takes place between people, increasing knowledge and encouraging action.
                For companies to be successful, they need employees, customers, suppliers and the public to know as much as
              possible about what the company</p>
            </div>
          </div>


            <div className="Info-text-box2">
              <div className="Info-image2">
                <img src="trophy.svg" />
              </div>
              <div className="Info-text2">
                <h3>Why Comprend?</h3>
                <p>We work together with our clients. We work together with our colleagues and partners at sister agencies,
                  or other agencies for that matter. We are loyal to our clients and our team mates. We look for the best solution
                for each situation whether it is visual, tech or anything else.</p>
              </div>
            </div>

            <div className="Info-text-box3">
              <div className="Info-image3">
                <img src="message.gif" />
              </div>
              <div className="Info-text3">
                <h3>Get in touch with us</h3>
                <p>If you’re a curious and creative developer, designer, UX specialist, project manager or strategist and
                  passionate about digital communication – get in touch to explore our world! Check out our jobs to see what
                new colleagues we are looking for right now. </p>
              </div>
            </div>
          </div>


            <div className="callToAction">
              <div className="callToActionImage">
                  <img src="5.jpg" />
                  <span className="callToActionText">
                  <h2>We are looking for you</h2></span>
                  <a href= "/jobs">
                  <Button>Job openings</Button>
                  </a>
              </div>
            </div>

          <InstagramFeed />
        </div>
    );
  }
}


export default AboutUs
