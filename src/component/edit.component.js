import React, { Component } from "react";
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);

    /* Because  the component’s state (this.state) is been acessed in the event handler method, it is
    necessary to create bindings to "this" for all five methods */
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeResponsible = this.onChangeResponsible.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onChangeCompleted = this.onChangeCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      description: '',
      responsible: '',
      priority: '',
      completed: false
    }
  }

  componentDidMount() {
    //Use of Axios to send a HTTP GET request to the back-end to retrieve information
    axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
      .then(response => {
        //Once the result is available the component’s state is set with the values received
        this.setState({
          description: response.data.description,
          responsible: response.data.responsible,
          priority: response.data.priority,
          completed: response.data.completed
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

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

  onChangeCompleted(e) {
    this.setState({
      completed: !this.state.completed
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      description: this.state.description,
      responsible: this.state.responsible,
      priority: this.state.priority,
      completed: this.state.completed
    };
    console.log(obj);
    axios.post('http://localhost:4000/todos/update' + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    //The user is redirected to the default route of the application; the list of items is shown again
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h3 align="center">Update Item</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Description: </label>
            <input type='text'
              className='form-control'
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className='form-group'>
            <label>Responsible: </label>
            <input type='text'
              className='form-control'
              value={this.state.responsible}
              onChange={this.onChangeResponsible}
            />
          </div>

          <div className='form-group'>
            <div className='form-check form-check-inline'>
              <input className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityLow'
                value='Low'
                checked={this.state.priority === 'Low'}
                onChange={this.onChangePriority}
              />
              <label className='form-check-label'>Low</label>
            </div>
          </div>

          <div className='form-group'>
            <div className='form-check form-check-inline'>
              <input className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityMedium'
                value='Medium'
                checked={this.state.priority === 'Medium'}
                onChange={this.onChangePriority}
              />
              <label className='form-check-label'>Medium</label>
            </div>
          </div>

          <div className='form-group'>
            <div className='form-check form-check-inline'>
              <input className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityHigh'
                value='High'
                checked={this.state.priority === 'High'}
                onChange={this.onChangePriority}
              />
              <label className='form-check-label'>High</label>
            </div>
          </div>

          <div className='form-group'>
            <input className='form-check-input'
              id='completedCheckbox'
              type='checkbox'
              name='completedCheckbox'
              onChange={this.onChangeCompleted}
              checked={this.state.completed}
              value={this.state.completed}
            />
            <label className='form-check-label' htmlFor='completedCheckbox'>Completed</label>
          </div>

          <br />

          <div className='form-group'>
            <input type='submit' value='Update Item' className='btn btn-primary' />
          </div>

        </form>
      </div>
    );
  }
}
