import React, { Component } from "react"
import "./Posting.css"
import Button from "../Button";
import Coworkers from "../Coworkers";
import Grid from "../Grid";

const url = `http://hellotechnigo.comprendwebsites.net/api/jobs`

class Posting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobData: {},
      error: false
    }
  }

  componentDidMount() {
    let jobId = 0;

    if (this.props.id) {
      jobId = this.props.id;
    } else {
      jobId = this.props.match.params.id;
    }

    fetch(`http://hellotechnigo.comprendwebsites.net/api/jobs/${jobId}`).then(response => {
      return response.text()
    }).then(text => {
      try {
        const json = JSON.parse(text);
        this.setState({ jobData: json })
      } catch(err) {
        this.setState({ jobData: {}, error:true })
      }
    })
  }

  render() {
    if (this.state.error) {
      return (<div><h1 className = "JobGone" >Sorry...</h1><p className = "JobGone">Job no longer exists!</p></div>)
    }
    if (!this.state.jobData.id) {
      return null
    }

    return (
      <div>
       <div className="hero-posting">
          <div className="hero-image-posting">
            <img src="/frontendd.webp" />
            <div className="hero-text-posting">
              <h1>{this.state.jobData.title}</h1>
            </div>
          </div>

        <div className="job-container">
          <div className="job-information">
            <div className="inner-margin">
              <Grid>
                <div className="button-container">
                  <Button>Apply for this job</Button>
                  <Button>Share this job</Button>
                </div>

                <div className="job-intro">
                  <p>{this.state.jobData.intro}</p>
                </div>
                <div className = "mid-text">
                  <h3> Your role </h3>
                </div>
                <div className="job-workday">
                  <p>{this.state.jobData.workday}</p>
                </div>
                </Grid>
              </div>

                <div className = "job-aboutYou-section">
                  <div className = "aboutYou-image">
                    <img src="/comprend_ppl.jpg" />
                  </div>
                <div className = "aboutYou-text">
                  <div className="job-aboutYou">
                    <h3> About you </h3>
                    <p>{this.state.jobData.aboutYou}</p>
                  </div>
                </div>
              </div>

              <Grid>
                <div className = "mid-text">
                  <h3> About Us </h3>
                </div>
                <div className="job-aboutUs">
                  <p>{this.state.jobData.match}</p>
                </div>
                <div className="colleagues">
                  <h3>Some of your colleagues</h3>
                    <Coworkers />
                </div>
              </Grid>
            </div>
          </div>
          </div>
          </div>


    )
  }
}


export default Posting
