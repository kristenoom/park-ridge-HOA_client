import React, {Component} from 'react';
import { ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            passwordhash: "",
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }
 
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://parkridge-server.herokuapp.com/user/register`, {
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
            <>
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
                        <FormGroup check>
                        <Label htmlFor="isAdmin">Are you a board member?</Label>
                            <Input type="radio" name="isAdmin" value={this.state.IsAdmin} onChange={(e) => this.setState({ IsAdmin: this.state.IsAdmin })}>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                            </Input>
                    </FormGroup>
                    <Button type="submit" color="success">Register</Button>
                </Form>
                </ModalBody>
            </>
        )
    }
}