import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardDeck,
  CardFooter,
} from 'reactstrap';

class Home extends Component {
  render() {
    console.log(this.props.medicine);
    const med = this.props.medicine.map((meds, index) => {
      return (
        <div className='home' key={index}>
          <Card className='cards'>
            <CardHeader>
              <h3>{meds.name}</h3>
            </CardHeader>
            <CardBody>
              <CardText>Directions: {meds.directions}</CardText>
              <CardText>Servings: {meds.servings}</CardText>
              <CardText>Refill Left: {meds.refill_left}</CardText>
            </CardBody>
            <CardFooter>
              <Link to={'/medicine-detail/' + meds.id}>More Detail</Link>
            </CardFooter>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <CardDeck>{med}</CardDeck>
      </div>
    );
  }
}

export default Home;
