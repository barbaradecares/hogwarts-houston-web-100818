import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Filter from "./Filter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Filter />
      </div>
    );
  }
}

export default App;
