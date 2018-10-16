import React, { Component } from 'react';
import Jobs from './Jobs';


class JobsList extends Component {

  render(){
    return(
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Department</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.data.map((item) => <Jobs key={item.id} id={item.id} title={item.title} city={item.city} department={item.department} />)
          }
        </tbody>
      </table>
    );

  }

}

export default JobsList;
