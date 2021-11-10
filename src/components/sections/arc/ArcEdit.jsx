import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../helpers/Environment';

export default class ArcEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            document1: "",
            document2: ""
        };
    }

    //console.log(this.state.token);

    arcUpdate = (e, arc) => {
        e.preventDefault();
        fetch(APIURL + `/arc/${this.state.arcToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: this.state.name,
                address: this.state.address,
                document1: this.state.document1,
                document2: this.state.document2
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            })
        })
            .then((res) => {
                this.state.fetchArcRequest();
                this.state.updateOff();
        })
    }
    render() {
        return (
            <Modal isOpen={true}>
                <ModalHeader>Edit Your Architectural Review Request Entry</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.state.arcToUpdate}>
                        <FormGroup>
                            <Label htmlForm="name">Name:</Label>
                            <Input name="name" value={this.state.name} onChange={(e) => this.setState({ name: this.state.name })} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlForm="address">Address:</Label>
                            <Input name="address" value={this.state.address} onChange={(e) => this.setState({ address: this.state.address })} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlForm="document1">Document 1:</Label>
                            <Input name="document1" value={this.state.document1} onChange={(e) => this.setState({ document1: this.state.document1 })} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlForm="document2">Document 2:</Label>
                            <Input name="document2" value={this.state.document2} onChange={(e) => this.setState({ document2: this.state.document2 })} />
                        </FormGroup>
                        <Button type="submit" color="success">Update</Button>
                    </Form>
                </ModalBody>
            </Modal>
        )
    }
}