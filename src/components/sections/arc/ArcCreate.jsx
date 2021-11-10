import React, { Component } from 'react';
import { Container, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/Environment';

export default class ArcCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            document1: "",
            document2: ""
        }
        
        this.state.handleSubmit = (e) => {
            e.preventDefault();
            fetch(APIURL + `/arc/create`, {
                method: 'POST',
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
                .then((data) => {
                    console.log(data);
                    this.setState(this.state.name);
                    this.setState(this.state.address);
                    this.setState(this.state.document1);
                    this.setState(this.state.document2);
                    this.state.fetchArcRequest();
                })
        }
    }

    render() {
        return (
            <Container className="main text">
                <FormGroup>
                    <Label htmlForm='name' value={this.state.name} onChange={(e) => this.setState({ name: this.state.name })} />
                    <Input type="text" name="name" />
                    <Label htmlForm='address' value={this.state.address} onChange={(e) => this.setState({ address: this.state.address })} />
                    <Input type="text" name="address" />
                    <Label htmlForm='document1' value={this.state.document1} onChange={(e) => this.setState({ document1: this.state.document1 })} />
                    <Input type="file" name="document1" placeholder='Drawing 1' />
                    <br />
                    <Label htmlForm='document2' value={this.state.document2} onChange={(e) => this.setState({ document2: this.state.document2 })} />
                    <Input type="file" name="document2" placeholder='Drawing 2' />
                </FormGroup>
                <Button type="submit" color="success">Submit</Button>
            </Container>
        )
    }
};