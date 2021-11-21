import React, { Component } from 'react';
import { Container, FormGroup, Label, Input, Button } from 'reactstrap';

export default class HomesCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            squareFootage: "",
            bedroom: "",
            bathroom: "",
            garage: "",
            acreage: ""
        }
        
        this.state.handleSubmit = (e) => {
            e.preventDefault();
            fetch(`https://parkridge-server.herokuapp.com/homes/create`, {
                method: 'POST',
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
                .then((data) => {
                    console.log(data);
                    this.setState(this.state.address);
                    this.setState(this.state.squareFootage);
                    this.setState(this.state.bedroom);
                    this.setState(this.state.bathroom);
                    this.setState(this.state.garage);
                    this.setState(this.state.acreage);
                    this.state.fetchHomesRequest();
                })
        }
    }

    render() {
        return (
            <Container className="main text">
                <FormGroup>
                    <Label htmlForm='address' value={this.state.address} onChange={(e) => this.setState({ address: this.state.address })} />
                    <Input type="text" name="address" />
                    <Label htmlForm='squareFootage' value={this.state.squareFootage} onChange={(e) => this.setState({ squareFootage: this.state.squareFootage })} />
                    <Input type="text" name="squareFootage" />
                    <Label htmlForm='bedroom' value={this.state.bedroom} onChange={(e) => this.setState({ bedroom: this.state.bedroom })} />
                    <Input type="text" name="bedroom" placeholder='bedroom' />
                    <Label htmlForm='bathroom' value={this.state.bathroom} onChange={(e) => this.setState({ bathroom: this.state.bathroom })} />
                    <Input type="text" name="bathroom" placeholder='bathroom' />
                    <Label htmlForm='garage' value={this.state.garage} onChange={(e) => this.setState({ garage: this.state.garage })} />
                    <Input type="text" name="garage" placeholder='garage' />
                    <Label htmlForm='squareFootage' value={this.state.squareFootage} onChange={(e) => this.setState({ squareFootage: this.state.squareFootage })} />
                    <Input type="text" name="squareFootage" placeholder='squareFootage' />
                    <br />
                </FormGroup>
                <Button type="submit" color="success">Submit</Button>
            </Container>
        )
    }
};