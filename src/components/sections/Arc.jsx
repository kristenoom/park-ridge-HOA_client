import React, { Component } from 'react';
import { Container, FormGroup, Input } from 'reactstrap';

export default class Arc extends Component {
  render() {
    return (
        <Container className="main text">
            <h1>Architectural Review Committee</h1>
            <FormGroup>
                <Input type="file" name="document1" placeholder='Drawing 1' />
                <br />
                <Input type="file" name="document2" placeholder='Drawing 2' />
            </FormGroup>
        </Container>
    )
  }
}