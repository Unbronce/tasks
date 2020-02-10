import React from "react";
import "./UserOutput.css";
const userOutput = props => {
  const style = {
    width: "300px",
    margin: "16px auto",
    border: "1px solid #eee",
    padding: "16px"
  };
  return (
    <div style={style}>
      <p>User name: {props.name}</p>
      <p>There could be your advertisement</p>
    </div>
  );
};

export default userOutput;
