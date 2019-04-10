import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      medicine: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/medications')
      .then(response => {
        this.setState({ medicine: response.data });
        // console.log('App response.data', response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    console.log('App state', this.state.medicine);
    return (
      <div className='App'>
        <nav>
          <Link to='/'>
            <img
              src='https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png'
              alt=''
            />
            <h1>Bitcoin prices</h1>
          </Link>
        </nav>
        <main>
          <Route
            exact
            path='/'
            render={props => <Home {...props} {...this.state} />}
          />
        </main>
      </div>
    );
  }
}

export default App;
