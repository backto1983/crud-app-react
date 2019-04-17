import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //Adding routing configuration

import Create from "./component/create.component";
import Edit from "./component/edit.component";
import List from "./component/list.component";

import logo from "./logo.png";

//This file is responsible for producing the output seen in the browser
class App extends Component {
  render() {
    return (
      //To use "Router", it is necessary to embed the JSX code in a <Router></Router> element
      <Router>
        {/* JSX uses "classname" instead of "class" */}
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              {/* The source is set simply as "{logo}" because the image was already imported (line 9)*/}
              <img src={logo} width="30" height="30" alt="Logo" />
            </a>
            {/* "Link" is associated with "react-router-dom" */}
            <Link to="/" className="navbar-brand">
              Crud App React
            </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    List
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />

          {/* Each "Route" element needs at least the "path" and the "component" (connects the path with a 
          component) attributes; they are used to add the configuration settings for each route */}
          <Route path="/" exact component={List} />
          {/* The "edit" route accepts a parameter (id) as part of the URL */}
          <Route path="/edit/:id" exact component={Edit} />
          <Route path="/create" exact component={Create} />
        </div>
      </Router>
    );
  }
}

export default App;
