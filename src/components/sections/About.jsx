import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
        <Container className="main text">
            <h1>About</h1>
                <span className="heading-meta">About Park Ridge Community</span>
                <h2 className="colorlib-heading">Where are we located?</h2>
                <p>Our community is located south of Downtown Warsaw, just off of Rt. 15 via County Farm Road. Park Ridge Church is located at our entrance.</p>
      </Container>
    )
  }
}