import React, { Component } from 'react';
import axios from 'axios';

class EditMedicine extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      directions: '',
      servings: null,
      refill_left: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/medications/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ ...response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
    console.log(this.state);
  }

  updateMed() {
    axios
      .put(
        'http://localhost:8000/medications/' + this.props.match.params.id,
        this.state
      )
      .then(function(response) {})
      .finally(() => {
        this.props.history.push('/');
      });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.updateMed();
  }

  render() {
    console.log(this.state);

    return (
      <div className='card m-5'>
        <div className='card-body'>
          <h1>Edit Medicine</h1>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label>Name</label>
              <p>
                <input
                  className='form-control'
                  id='name'
                  name='name'
                  type='text'
                  defaultValue={this.state.name}
                  onChange={this.handleChange}
                />
              </p>
            </div>
            <div className='form-group'>
              <label>Directions</label>
              <p>
                <textarea
                  className='form-control'
                  id='directions'
                  name='directions'
                  type='text'
                  placeholder={this.state.directions}
                  onChange={this.handleChange}
                />
              </p>
            </div>
            <div className='form-group'>
              <label>Servings</label>
              <p>
                <input
                  className='form-control'
                  id='servings'
                  name='servings'
                  type='text'
                  defaultValue={this.state.servings}
                  onChange={this.handleChange}
                />
              </p>
            </div>
            <div className='form-group'>
              <label>Refill Left</label>
              <p>
                <input
                  className='form-control'
                  id='refill_left'
                  name='refill_left'
                  type='text'
                  defaultValue={this.state.refill_left}
                  onChange={this.handleChange}
                />
              </p>
            </div>
            <p>
              <button className='btn btn-primary'>Update</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default EditMedicine;
