import React, { Component } from 'react'
import { Container } from 'reactstrap';

export default class Amenities extends Component {
  render() {
    return (
        <Container className="text">
            <h1>Amenities</h1>
            <p>Park</p>
            <p>Pond</p>
            <p>Light lined streets</p>
            <p>Sidewalks</p>
        </Container>
    )
  }
}