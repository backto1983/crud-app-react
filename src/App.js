import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//This file is responsible for producing the output seen in the browser
class App extends Component {
  render() {
    return (
      //JSX uses classname instead of class
      <div className="container">
        <h2>CRUD React App</h2>
      </div>
    );
  }
}

export default App;
