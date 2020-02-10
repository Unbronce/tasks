import React from "react";
import "./UserInput.css";

const userInput = props => {
  return (
    <div className="UserInput">
      <input
        type="text"
        onChange={props.change}
        value={props.name}
        placeholder="enter the name"
      />
    </div>
  );
};

export default userInput;
