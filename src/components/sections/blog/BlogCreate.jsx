import React, { Component } from 'react';
import { Container, FormGroup, Label, Input, Button } from 'reactstrap';

export default class BlogCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            keywords: ""
        }
        
        this.state.handleSubmit = (e) => {
            e.preventDefault();
            fetch(`https://parkridge-server.herokuapp.com/blog/create`, {
                method: 'POST',
                body: JSON.stringify({
                    title: this.state.title,
                    content: this.state.content,
                    keywords: this.state.keywords,
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
                    this.setState(this.state.title);
                    this.setState(this.state.content);
                    this.setState(this.state.keywords);
                    this.state.fetchBlogRequest();
                })
        }
    }

    render() {
        return (
            <Container className="main text">
                <FormGroup>
                    <Label htmlForm='title' value={this.state.title} onChange={(e) => this.setState({ title: this.state.title })} />
                    <Input type="text" name="title" />
                    <Label htmlForm='content' value={this.state.content} onChange={(e) => this.setState({ content: this.state.content })} />
                    <Input type="text" name="content" />
                    <Label htmlForm='keywords' value={this.state.keywords} onChange={(e) => this.setState({ keywords: this.state.keywords })} />
                    <Input type="text" name="keywords" placeholder='keywords' />
                    <br />
                </FormGroup>
                <Button type="submit" color="success">Submit</Button>
            </Container>
        )
    }
};