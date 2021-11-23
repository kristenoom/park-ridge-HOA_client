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
            acreage: "",
            handleSubmit: ""
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
                    {/* ADDRESS */}
                        <Label htmlForm="address">Address:</Label>
                        <Input type="text" placeholder="enter address here" name="address" htmlForm='address' value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} style={{maxWidth: "500px"}}/>
                        </FormGroup>
                        <FormGroup>
                    {/* SQ FOOTAGE */}
                        <Label htmlForm="squareFootage">Sq Ft:</Label>
                        <Input type="text" placeholder="square footage" name="squareFootage" htmlForm="squareFootage" value={this.state.squareFootage} onChange={(e) => this.setState({squareFootage: e.target.value})} style={{maxWidth: "500px"}} />
                        </FormGroup>
                        <FormGroup>
                    {/* BEDROOMS */}
                        <Label htmlForm='bedroom'>Bedrooms:</Label>
                        <Input type="text" placeholder="enter # of bedrooms" name="bedroom" value={this.state.bedroom} onChange={(e) => this.setState({bedroom: e.target.value})} style={{maxWidth: "500px"}} />
                        </FormGroup>
                        <FormGroup>
                    {/* BATHROOMS */}
                        <Label htmlForm='bathroom'>Bathrooms:</Label>
                        <Input type="text" placeholder="enter # of bathrooms" name="bathroom" value={this.state.bathroom} onChange={(e) => this.setState({bathroom: e.target.value})} style={{maxWidth: "500px"}} />
                        </FormGroup>
                        <FormGroup>
                    {/* GARAGES */}
                        <Label htmlForm='garage'>Garage:</Label>
                        <Input type="text" placeholder="enter # of garage spaces" name="garage" value={this.state.garage} onChange={(e) => this.setState({garage: e.target.value})} style={{maxWidth: "500px"}} />
                        </FormGroup>
                        <FormGroup>
                    {/* ACREAGES */}
                        <Label htmlForm='acreage'>Acreage:</Label>
                        <Input type="text" placeholder="enter acreage" name="acreage" value={this.state.acreage} onChange={(e) => this.setState({acreage: e.target.value})} style={{maxWidth: "500px"}} />
                        </FormGroup>
                    <br />
                <Button type="submit" color="success">Submit</Button>
            </Container>
        )
    }
};