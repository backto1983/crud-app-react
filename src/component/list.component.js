import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Item = props => (
  <tr>
    <td>{props.item.description}</td>
    <td>{props.item.responsible}</td>
    <td>{props.item.priority}</td>
    <td>
      <Link to={"edit/" + props.item._id}>Edit</Link>
    </td>
  </tr>
)

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] }; //initialize the state with an empty array
  }

  //Component used to retrieve the tiems from the database
  componentDidMount() {
    axios.get('http://localhost:4000/todos/').then(response => {
      this.setState({ todos: response.data });
    }).catch(function (error) {
      console.log(error);
    })
  }

  //This component uses the map function to iterate through the items list
  itemsList() {
    return this.state.todos.map(function (currentItem, i) {
      return <Item item={currentItem} key={i} />;
    })
  }

  //The "render()" returns JSX
  render() {
    return (
      <div>
        <h3>Items List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.itemsList()}
          </tbody>
        </table>
      </div>
    );
  }
}
