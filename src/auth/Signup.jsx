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
                    name: this.state.name,
                    address: this.state.address,
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
            <div style={{backgroundColor: "white", padding: "20px"}}>
                <br />
                <h1 className="heading">Sign Up</h1>
                <Form onSubmit={this.state.handleSubmit}>
                <FormGroup>
                        <Label htmlFor="name">Full Name</Label>
                            <Input name="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} style={{maxWidth: "300px"}}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="address">Street Address</Label>
                            <Input name="address" value={this.state.address} onChange={(e) => this.setState({address: e.target.value})} style={{maxWidth: "300px"}}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                            <Input name="username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} style={{maxWidth: "300px"}}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input name="password" value={this.state.passwordhash} onChange={(e) => this.setState({ passwordhash: e.target.value })} style={{maxWidth: "300px"}} />
                        </FormGroup>
                        <FormGroup check>
                        <Label htmlFor="isAdmin">Are you a board member?</Label>
                            <Input type="radio" name="isAdmin" value={this.state.IsAdmin} onChange={(e) => this.setState({ IsAdmin: e.target.value })}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                            </Input>
                    </FormGroup>
                    <Button type="submit" color="success">Register</Button>
                </Form>
                <br />
            </div>
        )
    }
}