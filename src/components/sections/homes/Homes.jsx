import React, { Component } from 'react'
import { Container, Row, Col, CardColumns, Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

import HomesCreate from './HomesCreate';
import HomesEdit from './HomesEdit';
import HomesTable from './HomesTable';

export default class Homes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            squareFootage: "",
            bedroom: "",
            bathroom: "",
            garage: "",
            acreage: "",
            sessionToken: ""
        }

    this.state.fetchHomesRequest = (e) => {
        e.preventDefault();
        let sessionToken = localStorage.getItem('token');
        console.log(sessionToken);
        fetch(`https://parkridge-server.herokuapp.com/blog/create`, {
            method: 'GET',
            body: JSON.stringify({
                address: this.state.address,
                squareFootage: this.state.squareFootage,
                bedroom: this.state.bedroom,
                bathroom: this.state.bathroom,
                garage: this.state.garage,
                acreage: this.state.acreage,
                sessionToken: this.state.sessionToken
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.state.sessionToken
            })
        })
            .then((res) => res.json())
            .then((homesData) => {
                this.state.homes(homesData)
                console.log(homesData)
            })
    };

    this.setState(() => {
        this.state.fetchHomesRequest();
    }, []);

    this.state.editUpdateHomes = (homes) => {
        this.state.homesToUpdate(homes);
        console.log(homes);
    };

    this.state.updateOn = () => {
        this.state.updateActive(true);
    };

    this.state.updateOff = () => {
        this.state.updateActive(false);
    };
}

  render(props) {
    return (
        <Container className="main text">
            <h1>Homes of Park Ridge</h1>
            <Row>
                <Col>
                    <HomesCreate fetchHomesRequest={this.state.fetchHomesRequest} sessionToken={this.state.sessionToken} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardColumns>
                        <HomesTable homes={this.state.homes} updateHomes={this.state.updateHomes} updateOn={this.state.updateOn} fetchHomesRequest={this.state.fetchHomesRequest} sessionToken={this.state.sessionToken} />
                    </CardColumns>
                </Col>
            </Row>
            <Row>
                <Col>
                    {this.state.updateActive ? <HomesEdit homesToUpdate={this.state.homesToUpdate} updateOff={this.state.updateOff} sessionToken={this.state.sessionToken} fetchHomesRequest={this.state.fetchHomesRequest} /> : <></>}
                </Col>
            </Row>
        </Container>
    )
  }
}