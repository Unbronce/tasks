import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    persons: [{ userName: "John" }, { userName: "Jane" }, { userName: "Jacob" }]
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { userName: event.target.value },
        { userName: event.target.value },
        { userName: "Jacob" }
      ]
    });
  };

  render() {
    const style = {
      width: "200px",
      margin: "16px auto",
      border: "1px solid #eee",
      padding: "16px"
    };

    return (
      <div className="App">
        <UserInput change={this.nameChangedHandler} />
        <UserOutput name={this.state.persons[0].userName} style={style} />
        <UserOutput name={this.state.persons[1].userName} />
        <UserOutput name={this.state.persons[2].userName} />
      </div>
    );
  }
}

export default App;
