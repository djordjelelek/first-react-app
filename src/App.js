import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Typing from "./Typing/Typing";
import Char from "./Typing/Char.js";

class App extends Component {
  state = {
    name: "__________",
    age: "__",
    showPerson: true,
    char: [],
    footer: [{ a: "powerdBy:" }, { a: "Djordje" }, { a: "Lelek" }],
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
  deletePersonHandler = () => {
    this.setState({
      showPerson: false,
    });
  };
  addDeletePersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson,
    });
  };
  trackingHandler = (event) => {
    this.setState({
      char: [...event.target.value],
    });
  };
  deleteHandler = (index) => {
    let copy = [...this.state.char];
    copy.splice(index, 1);
    this.setState({
      char: copy,
    });
  };

  render() {
    const style = {
      cursor: "pointer",
    };
    let card = null;
    if (this.state.showPerson) {
      card = (
        <div>
          <Person
            name={this.state.name}
            age={this.state.age}
            changeName={this.nameChangeHandler}
            changeAge={this.ageChangeHandler}
          ></Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1 style={style}>Card</h1>
        <button type="button" onClick={this.deletePersonHandler}>
          delete
        </button>
        <button type="button" onClick={this.addDeletePersonHandler}>
          add/delete
        </button>
        {card}
        <Typing tracking={this.trackingHandler} />
        <br />
        {this.state.char.map((element, index) => {
          return (
            <Char
              c={element}
              key={index}
              delete={this.deleteHandler.bind(this, index)}
              style={style}
            />
          );
        })}

        <footer>
          <br />
          <br />
          {this.state.footer.map((element, index) => {
            return element.a;
          })}
        </footer>
      </div>
    );
  }
}

export default App;
