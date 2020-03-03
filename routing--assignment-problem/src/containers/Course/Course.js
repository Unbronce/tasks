import React, { Component } from "react";

class Course extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.location.title}</h1>
        <p>You selected the Course with ID: {this.props.location.titleId}</p>
      </div>
    );
  }
}

export default Course;
