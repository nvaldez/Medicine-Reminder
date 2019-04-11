import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Header from '../Header/Header';
import EditMedicine from '../EditMedicine/EditMedicine';
import MedicineDetails from '../MedicineDetails/MedicineDetails';
import AddMedicine from '../AddMedicine/AddMedinene';
import Home from '../Home/Home';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      medicine: [],
    };

    this.getMedicine = this.getMedicine.bind(this);
  }

  getMedicine() {
    axios
      .get('http://localhost:8000/medications')
      .then(response => {
        this.setState({ medicine: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getMedicine();
  }
  render() {
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
            path='/medicine-detail/:id'
            render={props => (
              <MedicineDetails
                {...props}
                {...this.state}
                getMedicine={this.getMedicine}
              />
            )}
          />
          <Route
            path='/edit/:id'
            render={props => (
              <EditMedicine {...props} getMedicine={this.getMedicine} />
            )}
          />
          <Route
            path='/add-medicine'
            render={props => (
              <AddMedicine {...props} getMedicine={this.getMedicine} />
            )}
          />
          {/* <Route path='/medicine' component={Medicine} />
          <Route path='/doctor' component={Doctor} /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
