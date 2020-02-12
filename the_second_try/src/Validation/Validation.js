import React from "react";

const Validation = props => {
  let string = "Too short";
  if (props.length > 5) {
    string = "Long enough";
  }

  return <p>{string}</p>;
};

export default Validation;
