import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/Environment';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 
    let handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://parkridge-warsaw.herokuapp.com/user/register`, {
            method: "POST",
            body: JSON.stringify({
                user: {
                    username: username,
                    passwordhash: password,
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                props.updateToken(data.sessionToken);
            });
    };

    return(
        <div>
            <h1 className="heading">Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit" color="success">Enter</Button>
            </Form>
        </div>
    )
}

export default Signup;