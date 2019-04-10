import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import MedicineDetails from '../MedicineDetails/MedicineDetails';
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
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    console.log('App state', this.state.medicine);
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route
            exact
            path='/'
            render={props => <Home {...props} {...this.state} />}
          />
          <Route
            exact
            path='/medicine-detail/:id'
            render={props => <MedicineDetails {...props} {...this.state} />}
          />
          {/* <Route path='/medicine' component={Medicine} />
          <Route path='/doctor' component={Doctor} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
