import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            passwordhash: "",
            IsAdmin: false,
            sessionToken: "",
            updateToken: ""
        };

    }
 
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://parkridge-server.herokuapp.com/user/register`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    passwordhash: this.state.passwordhash,
                    IsAdmin: this.state.IsAdmin
                    
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
                <h1 className="heading">Sign Up</h1>
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
            </>
        )
    }
}