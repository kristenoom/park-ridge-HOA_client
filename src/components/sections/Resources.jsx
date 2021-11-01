import React, { Component } from 'react'
import { Container } from 'reactstrap';

export default class Resources extends Component {
  render() {
    return (
        <Container className="main text">
            <h1>Resources</h1>
            <section className="flex-container">
                <div className="flex-item-left">
                    <h3>Safety</h3>
                    <p>Police, Fire and Emergency<br />Dial 9-1-1</p>
                    <p>Warsaw Police<br />(Non-Emergency)<br />xxx-xxx-xxxx</p>
                    <p>Kosciosko County<br />xxx-xxx-xxxx</p>
                    <p>Indiana State Police<br />574-233-1123</p>
                    <p>Poison Control Center<br />800-222-1222</p>
                </div>
                <div className="flex-item-middle">
                    <h3>Utilities</h3>
                    <p>NIPSCO<br />xxx-xxx-xxxx</p>
                    <p>Indiana American Water<br />xxx-xxx-xxxx</p>
                    <p>Warsaw Wastewater<br />xxx-xxx-xxxx</p>
                </div>
                <div className="flex-item-right">
                    <h3>Community</h3>
                    <p>Warsaw Schools<br />xxx-xxx-xxxx</p>
                    <p>Warsaw Parks<br />xxx-xxx-xxxx</p>
                </div>
            </section>
      </Container>
    )
  }
}