import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    name: "__________",
    age: "__",
  };

  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  ageChangeHandler = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      border: "1px solid #ccc",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1 style={style}>Card</h1>
        <Person
          name={this.state.name}
          age={this.state.age}
          changeName={this.nameChangeHandler}
          changeAge={this.ageChangeHandler}
        ></Person>
      </div>
    );
  }
}

export default App;
