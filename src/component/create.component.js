import React, { Component } from "react";

export default class Create extends Component {
  constructor(props) {
    super(props);

    /* The four implemented methods are dealing with the component’s state object, so it is necessary to
    to bind those methods to "this" */
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeResponsible = this.onChangeResponsible.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //The initial state of the "create" component has an object...
    this.state = {
      //... which has 4 properties; more can be included
      description: "",
      responsible: "",
      priority: "",
      completed: false //"completed" has "false" as the default value
    };
  }

  //Methods are going to be added; they are used to modify the state properties
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeResponsible(e) {
    this.setState({
      responsible: e.target.value
    });
  }

  onChangePriority(e) {
    this.setState({
      priority: e.target.value
    });
  }

  /* Another method is needed to handle the submit event of the form which will implemented to create a new
  item */
  onSubmit(e) {
    e.preventDefault(); //Funtion used to ensure that the default HTML form submit behaviour is prevented

    console.log(`Form submitted:`);
    console.log(`Description: ${this.state.description}`);
    console.log(`Responsible: ${this.state.responsible}`);
    console.log(`Priority: ${this.state.priority}`);

    this.setState({
      //To make sure that the form is resetted
      description: "",
      responsible: "",
      priority: "",
      completed: false
    });
  }

  render() {
    return (
      //JSX needed to display the form
      <div style={{ marginTop: 10 }}>
        <h3>Create New Item</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.responsible}
              onChange={this.onChangeResponsible}
            />
          </div>

          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.priority === "Low"}
                onChange={this.onChangePriority}
              />
              <label className="form-check-label">Low</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.priority === "Medium"}
                onChange={this.onChangePriority}
              />
              <label className="form-check-label">Medium</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.priority === "high"}
                onChange={this.onChangePriority}
              />
              <label className="form-check-label">high</label>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Create" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
