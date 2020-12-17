import React, { Component } from "react";
import "./App.css";
// import Radium from "radium"; //radium
import styled from "styled-components"; //styled-components
import Person from "./Person/Person";
import Typing from "./Typing/Typing";
import Char from "./Typing/Char.js";
import ErrorBoundary from "./ErrorBoundaries/Error Boundaries";

class App extends Component {
  state = {
    name: "__________",
    age: "__",
    showPerson: true,
    char: [],
    footer: [{ a: "powerdBy:" }, { a: "Djordje" }, { a: "Lelek" }],
    styleMeasure: "3px",
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
    const styleDelete = {
      backgroundColor: "#a10000",
      // ":hover": {
      //   backgroundColor: "#e3551e",
      // },
    };
    const styleAdd = {
      backgroundColor: "#3f6b34",
      // ":hover": {
      //   backgroundColor: "#3bde12",
      // },
    };
    const Button = styled.button`
      background: transparent;
      border-radius: ${this.state.styleMeasure}; //regular JS
      border: 2px solid palevioletred;
      color: palevioletred;
      margin: 0 1em;
      padding: 0.25em 1em;
    `;

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
        <Button
          key="key1"
          type="button"
          onClick={this.deletePersonHandler}
          // style={{ ...style, ...styleDelete }}
        >
          delete
        </Button>
        <button
          key="key2"
          type="button"
          onClick={this.addDeletePersonHandler}
          style={{ ...style, ...styleAdd }}
        >
          add/delete
        </button>
        {card}
        <ErrorBoundary>
          <Typing tracking={this.trackingHandler} />
        </ErrorBoundary>
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
