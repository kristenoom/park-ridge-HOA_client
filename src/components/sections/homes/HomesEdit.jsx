import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

export default class HomesEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            squareFootage: "",
            bedroom: "",
            bathroom: "",
            garage: "",
            acreage: ""
        };
    }

    //console.log(this.state.token);

    homesUpdate = (e, homes) => {
        e.preventDefault();
        fetch(`https://parkridge-server.herokuapp.com/homes/${this.state.homesToUpdate.id}`, {
            method: 'PUT',
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
                'Authorization': this.state.token
            })
        })
            .then((res) => {
                this.state.fetchHomesRequest();
                this.state.updateOff();
        })
    }
    render() {
        return (
            <Modal isOpen={true}>
                <ModalHeader>Edit Homes Post</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.state.homesToUpdate}>
                        <FormGroup>
                            <Label htmlForm="address">Address:</Label>
                            <Input name="address" value={this.state.address} onChange={(e) => this.setState({ address: this.state.address })} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlForm="squareFootage">Square Footage:</Label>
                            <Input name="squareFootage" value={this.state.squareFootage} onChange={(e) => this.setState({ squareFootage: this.state.squareFootage })} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlForm="bedroom">Bedrooms:</Label>
                            <Input name="bedroom" value={this.state.bedroom} onChange={(e) => this.setState({ bedroom: this.state.bedroom })} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlForm="bathroom">Bathrooms:</Label>
                            <Input name="bathroom" value={this.state.bathroom} onChange={(e) => this.setState({ bathroom: this.state.bathroom })} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlForm="garage">Garage:</Label>
                            <Input name="garage" value={this.state.garage} onChange={(e) => this.setState({ garage: this.state.garage })} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlForm="acreage">Acreage:</Label>
                            <Input name="acreage" value={this.state.acreage} onChange={(e) => this.setState({ acreage: this.state.acreage })} />
                        </FormGroup>
                        <Button type="submit" color="success">Update</Button>
                    </Form>
                </ModalBody>
            </Modal>
        )
    }
}