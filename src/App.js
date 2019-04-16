import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //Adding routing configuration

//This file is responsible for producing the output seen in the browser
class App extends Component {
  render() {
    return (
      //To use "Router", it is necessary to embed the JSX code in a <Router></Router> element
      <Router>
        {/* JSX uses "classname" instead of "class" */}
        <div className="container">
          <h2>CRUD React App</h2>
        </div>
        {/* Each "Route" element needs at least the "path" and the "component" (connects the path with a 
        component) attributes; they are used to add the configuration settings for each route */}
        <Route path="/" exact component={TodosList} />
        {/* The "edit" route accepts a parameter (id) as part of the URL */}
        <Route path="/edit/:id" exact component={EditTodo} />
        <Route path="/create" exact component={CreateTodo} />
      </Router>
    );
  }
}

export default App;
