import React from "react";
import "./Char.css";

const Char = (props) => {
  return (
    <div className="char color" onClick={props.delete}>
      {props.c}
    </div>
  );
};

export default Char;
