import React from "react";

const Char = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
    color: "red"
  };
  return (
    <div style={style} onClick={props.click}>
      {props.item}
    </div>
  );
};

export default Char;
