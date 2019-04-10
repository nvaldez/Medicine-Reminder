import React, { Component } from 'react';

class Home extends Component {
  render() {
    console.log(this.props.medicine);
    const med = this.props.medicine.map(meds => {
      return <h1>{meds.name}</h1>;
    });

    return (
      <div>
        <h1>{med}</h1>
      </div>
    );
  }
}

export default Home;
