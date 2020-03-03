import React, { Component } from "react";
import Course from "../Course/Course";

import "./Courses.css";
import { withRouter, Route } from "react-router-dom";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" }
    ]
  };

  componentDidMount() {
    console.log(this.props);
    console.log(this.data);
  }

  courseSelectedhandler(id, title) {
    this.props.history.push({
      pathname: this.props.match.url + "/course/" + id,
      titleId: id,
      title: title
    });
  }

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map(course => {
            return (
              <article
                className="Course"
                key={course.id}
                onClick={() =>
                  this.courseSelectedhandler(course.id, course.title)
                }
              >
                {course.title}
              </article>
            );
          })}
        </section>
        <Route path={this.props.match.url + "/:id"} component={Course} />
      </div>
    );
  }
}

export default withRouter(Courses);
