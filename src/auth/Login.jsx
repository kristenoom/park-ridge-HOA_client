import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
//import Modal from 'react-modal';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            passwordhash: "",
            updateToken: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://parkridge-server.herokuapp.com/user/login`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: this.state.username, passwordhash: this.state.passwordhash,
                    updateToken: "",
                    sessionToken: ""
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
            <div style={{ backgroundColor: "white", padding: "20px"}}>
                <br />
                <h1 className="heading">Login</h1>
                <Form onSubmit={this.state.handleSubmit}>
                    <FormGroup controlId="Username" bsSize="small">
                        <Label htmlFor="username">Username</Label>
                            <Input name="username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} style={{maxWidth: "300px"}} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input name="password" value={this.state.passwordhash} onChange={(e) => this.setState({passwordhash: e.target.value})} style={{maxWidth: "300px"}} />
                    </FormGroup>
                    <Button type="submit" color="success">Sign In</Button>
                </Form>
                <br />
            </div>
        )
    }
}