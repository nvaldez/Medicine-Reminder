import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardFooter,
  Button,
} from 'reactstrap';
import axios from 'axios';
import './MedicineDetails.css';

class MedicineDetails extends Component {
  constructor() {
    super();
    this.state = {
      medicine: [],
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:8000/medications/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ medicine: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
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
            <CardFooter>
              <Button>Edit</Button>
            </CardFooter>
          </Card>
        </div>
      )
    );
  }
}

export default MedicineDetails;
