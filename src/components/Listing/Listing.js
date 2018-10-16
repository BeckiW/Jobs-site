import React, { Component } from "react"
import css from './Listing.css'
import JobsList from './JobsList'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


const query = `jobs`;
const URL = `http://hellotechnigo.comprendwebsites.net/api/${query}`;

const options = [
  'one', 'two', 'three'
];

class Listing extends Component {
  state = {
    jobs: [],
    selectedDepartment: null,
    selectedCity: null
  };

  componentDidMount() {
     fetch(URL)
     .then(response => response.json())
     .then(responseData => {
       this.setState({jobs: responseData});
   })
   .catch(error => {
     console.log('Error fetching and parsing data', error);
   });
  }


  render() {
    let filteredJobs = this.state.jobs || [];
    if(this.state.selectedDepartment) {
      filteredJobs = filteredJobs.filter((item) => item.department === this.state.selectedDepartment);
    }



    if(this.state.selectedCity) {
      filteredJobs = filteredJobs.filter((item) => item.city === this.state.selectedCity);
    }


    return (
      <div>
      <div className="hero-listing">
        <div className="hero-image-listing">
            <img src="/creative.jpg" />
        <div className="hero-text-listing">
          <h1>All job openings</h1>
          <p>We are currently looking for great talent in most competences, and across geographies</p>
          </div>
          </div>

      </div>
        <h1 className="jobListing">Job Listing</h1>
        <div className="listing-buttons">
          <Dropdown
            options={[...this.state.jobs
              .filter((item, pos, self) => {
                return self.map(i => i.department).indexOf(item.department) === pos;
              })
            .map((item) => ({
              value: item.department,
              label: this.departmentName(item.department)
            })), {
              value: null,
              label: 'All Departments'
            }]}
            placeholder="Department"
            onChange={this.onDepartmentChange}
          />
          <Dropdown
            options={[...this.state.jobs.map((item) => item.city).filter((item, pos, self) => {
              return self.indexOf(item) === pos;
            }), {
              value: null,
              label: 'All Cities'
            }]}
            placeholder="City"
            onChange={this.onCityChange}
          />
        </div>
        <div className="main-content-listing">
          <div className="content-text">
            <JobsList data={filteredJobs} />

          </div>
          <div className="related-jobs">
            <div className="related-jobs1">
            <img src="comprenddn_2.jpg" />
            </div>
            <div className="related-jobs2">
            <h2>Comprend in Stockholm and London</h2>
            <p>
            At Comprend we believe in creating stronger, more engaging
            Digital Corporate Communications solutions for our clients.
            Our 80+ strong team is based in Stockholm and London.
            We are
            part of H&H Group together with Hallvarsson & Halvarsson, Intellecta Corporate,
            Jung, Creo, Springtime, Hilanders, Tomorrow, Involve, Identx, Consilio and Bysted.</p></div>
          </div>
        </div>
      </div>
    )
  }

  onDepartmentChange = (event) => {
    this.setState({
      selectedDepartment: event.value
    });
  };


  onCityChange = (event) => {
    this.setState({
      selectedCity: event.value
    });
  }

  departmentName = (name) => {
    console.log(name);
    if (name === '3502') {
      return "Technology"
    } else  {
      return "Creative"
    }
  }
}

export default Listing
