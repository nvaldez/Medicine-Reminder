import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardText, CardBody, CardFooter } from 'reactstrap';
import axios from 'axios';
import './MedicineDetails.css';

class MedicineDetails extends Component {
  constructor() {
    super();
    this.state = {
      medicine: [],
    };

    this.deleteMed = this.deleteMed.bind(this);
  }
  componentDidMount() {
    axios
      .get(
        `https://medicine-tracker.herokuapp.com/medications/${
          this.props.match.params.id
        }`
      )
      .then(response => {
        this.setState({ medicine: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  deleteMed(evt) {
    evt.preventDefault();

    axios
      .delete(
        `https://medicine-tracker.herokuapp.com/medications/${
          this.props.match.params.id
        }`
      )
      .then(res => {
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => this.props.getMedicine());
  }

  render() {
    return (
      this.props.medicine && (
        <div>
          <Card className='medCard'>
            <CardHeader>
              <h3>{this.state.medicine.name}</h3>
            </CardHeader>
            <CardBody>
              <CardText>Directions: {this.state.medicine.directions}</CardText>
              <CardText>Servings: {this.state.medicine.servings}</CardText>
              <CardText>
                Refill Left: {this.state.medicine.refill_left}
              </CardText>
            </CardBody>
            <CardFooter className='footer-btn'>
              <div>
                <button className='btn btn-primary'>
                  <Link
                    className='footer'
                    to={`/edit/${this.state.medicine.id}`}>
                    Edit
                  </Link>
                </button>
              </div>
              <div>
                <form onSubmit={this.deleteMed}>
                  <button type='submit' className='btn btn-danger'>
                    Delete
                  </button>
                </form>
              </div>
            </CardFooter>
          </Card>
        </div>
      )
    );
  }
}

export default MedicineDetails;
