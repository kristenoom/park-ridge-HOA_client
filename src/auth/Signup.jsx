import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/Environment';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            passwordhash: ""
        }
    }
 
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(APIURL + `/user/register`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    passwordhash: this.state.passwordhash,
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.state.updateToken(data.sessionToken);
            });
    };

    render() {
        return (
            <Modal>
                <ModalHeader className="heading">Sign Up</ModalHeader>
                <ModalBody>
                <Form onSubmit={this.state.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                            <Input name="username" value={this.state.username} onChange={(e) => this.setState({username: this.state.username})} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                            <Input name="password" value={this.state.passwordhash} onChange={(e) => this.setState({ passwordhash: this.state.passwordhash })} />
                    </FormGroup>
                    <Button type="submit" color="success">Register</Button>
                </Form>
                </ModalBody>
            </Modal>
        )
    }
}