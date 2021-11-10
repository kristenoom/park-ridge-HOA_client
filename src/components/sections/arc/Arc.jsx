import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ArcCreate from './ArcCreate';
import ArcEdit from './ArcEdit';
import ArcTable from './ArcTable';
import APIURL from '../helpers/Environment';

export default class Arc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arc: "",
            updateArc: "",
            arcToUpdate: "",
            sessionToken: ""
        }
    
        this.state.fetchArcRequest = (e) => {
            e.preventDefault();
            let sessionToken = localStorage.getItem('token');
            console.log(sessionToken);
            fetch(APIURL + `/arc/create`, {
                method: 'GET',
                body: JSON.stringify({
                    name: this.state.name,
                    address: this.state.address,
                    document1: this.state.document1,
                    document2: this.state.document2,
                    sessionToken: this.state.sessionToken
                }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.state.sessionToken
                })
            })
                .then((res) => res.json())
                .then((arcData) => {
                    this.state.arc(arcData)
                    console.log(arcData)
                })
        };

        // useEffect(() => {
        //     fetchArcRequest();
        // }, []);

        this.setState(() => {
            this.state.fetchArcRequest();
        }, []);
    
        this.state.editUpdateArc = (arc) => {
            this.state.arcToUpdate(arc);
            console.log(arc);
        };

        this.state.updateOn = () => {
            this.state.updateActive(true);
        };

        this.state.updateOff = () => {
            this.state.updateActive(false);
        };
    }

    render() {
        return (
        <Container className="main text">
            <Row>
                <Col>
                <h1>Architectural Review Committee</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <ArcCreate fetchArcRequest={this.state.fetchArcRequest} sessionToken={this.state.sessionToken} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ArcTable arc={this.state.arc} updateArc={this.state.updateArc} updateOn={this.state.updateOn} fetchArcRequest={this.state.fetchArcRequest} sessionToken={this.state.sessionToken} />
                </Col>
                {this.state.updateActive ? <ArcEdit arcToUpdate={this.state.arcToUpdate} updateOff={this.state.updateOff} sessionToken={this.state.sessionToken} fetchArcRequest={this.state.fetchArcRequest} /> : <></>}        
            </Row>    
        </Container>
        )
    }
}