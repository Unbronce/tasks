import React from "react";
import "./UserInput.css";

const userInput = props => {
  return (
    <div className="UserInput">
      <input type="text" onChange={props.change} value={props.value} />
    </div>
  );
};

export default userInput;
