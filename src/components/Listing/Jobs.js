import React, { Component } from 'react';


class Jobs extends Component {


  departmentName = () => {
    if (this.props.department === '3502') {
      return "Technology"
    } else  {
      return "Creative"
    }
  }


  render() {
    return (
      <tr>
        <td><a href={"/job/" + this.props.id}>{this.props.title}</a></td>
        <td>{this.departmentName()}</td>
        <td>{this.props.city}</td>
      </tr>
    );
  }
}

export default Jobs;
