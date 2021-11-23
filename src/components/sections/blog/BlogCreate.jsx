import React, { Component } from 'react';
import { Container, FormGroup, Label, Input, Button } from 'reactstrap';

export default class BlogCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            keywords: "",
            handleSubmit: ""
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
                {/* TITLE OF ARTICLE */}
                    <Label htmlFor="title">Title of Article:</Label>
                    <Input type="text" placeholder="enter article title here" name="title" htmlForm='title' value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} style={{maxWidth: "500px"}}/>
                {/* CONTENT */}
                    <Label htmlForm="content">Body of Article:</Label>
                    <Input type="text" placeholder="content" name="content" htmlForm="content" value={this.state.content} onChange={(e) => this.setState({content: e.target.value})} style={{maxWidth: "500px", maxHeight: "750px"}} />
                {/* KEYWORDS */}
                    <Label htmlForm='keywords'>Keywords:</Label>
                    <Input type="text" placeholder="enter keywords here" name="keywords" value={this.state.keywords} onChange={(e) => this.setState({keywords: e.target.value})} style={{maxWidth: "500px"}} />
                    <br />
                </FormGroup>
                <Button type="submit" color="success">Submit</Button>
                <br />
            </Container>
        )
    }
};