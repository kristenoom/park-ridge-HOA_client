import React, { Component } from 'react'
import { Container } from 'reactstrap';

export default class Amenities extends Component {
  render() {
    return (
        <Container className="main text">
            <h1>Amenities</h1>
            <p>Child- and pet-friendly community we offer light lined streets and sidewalks to the playground and pond.</p>
            <h4>Playground at Park Ridge Park</h4>
            <img src='./assets/playground.jpg' alt="playground" />
            <h4>Pond</h4>
            <img src="./assets/pond.jpg" alt="pond" />
            <p>Light lined streets</p>
            <p>Sidewalks</p>
        </Container>
    )
  }
}