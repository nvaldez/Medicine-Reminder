import React, { Component } from 'react';
import axios from 'axios';

class AddMedinene extends Component {
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

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
    console.log(this.state);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const data = this.state;
    fetch('https://medicine-tracker.herokuapp.com/medications', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        this.props.history.push('/');
        console.log(result);
      })
      .finally(() => this.props.getMedicine());

    // axios({
    //   method: 'post',
    //   url: 'https://medicine-tracker.herokuapp.com/medications',
    //   data: {
    //     name: this.state.name,
    //     directions: this.state.directions,
    //     servings: this.state.servings,
    //     refill_left: this.refill_left,
    //   },
    // })
    //   .post('https://medicine-tracker.herokuapp.com/medications', {
    //     name: this.state.name,
    //     directions: this.state.directions,
    //     servings: this.state.servings,
    //     refill_left: this.refill_left,
    //   })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   })
    //   .finally(_ => this.props.history.push('/'));
  }

  render() {
    return (
      <div className='card m-5'>
        <div className='card-body'>
          <h1>Add Medicine</h1>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label>Name</label>
              <p>
                <input
                  className='form-control'
                  id='name'
                  name='name'
                  type='text'
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
                  onChange={this.handleChange}
                />
              </p>
            </div>
            <p>
              <button className='btn btn-primary'>Save</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMedinene;
