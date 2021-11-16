import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/Environment';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            passwordhash: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(APIURL + `/user/login`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: this.state.username, passwordhash: this.state.passwordhash
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
                <ModalHeader className="heading">Login</ModalHeader>
                <ModalBody>
                <Form onSubmit={this.state.handleSubmit}>
                    <FormGroup controlId="Username" bsSize="small">
                        <Label htmlFor="username">Username</Label>
                            <Input name="username" value={this.state.username} onChange={(e) => this.setState({username: this.state.username})} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input name="password" value={this.state.passwordhash} onChange={(e) => this.setState({passwordhash: this.state.passwordhash})}  />
                    </FormGroup>
                    <Button type="submit" color="success">Sign-In</Button>
                </Form>
                </ModalBody>
            </Modal>
        )
    }
}