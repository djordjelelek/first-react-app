import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p>
        name: {props.name}; age: {props.age}
      </p>
      <label htmlFor="">
        name:
        <input type="text" onChange={props.changeName} />
      </label>
      <br />
      <label htmlFor="">
        age:
        <input type="text" onChange={props.changeAge} />
      </label>
    </div>
  );
};

export default person;
