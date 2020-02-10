import React from "react";
import "./UserOutput.css";
const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>User name: {props.name}</p>
      <p>There could be your advertisement</p>
    </div>
  );
};

export default userOutput;
