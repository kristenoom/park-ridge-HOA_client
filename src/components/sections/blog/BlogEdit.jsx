import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

export default class BlogEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            content: "",
            keywords: "",
            document2: ""
        };
    }

    //console.log(this.state.token);

    blogUpdate = (e, blog) => {
        e.preventDefault();
        fetch(`https://parkridge-server.herokuapp.com/blog/${this.state.blogToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: this.state.title,
                content: this.state.content,
                keywords: this.state.keywords,
                fetchBlogRequest: this.state.fetchBlogRequest
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            })
        })
            .then((res) => {
                this.state.fetchBlogRequest();
                this.state.updateOff();
        })
    }
    render() {
        return (
            <Modal isOpen={true}>
                <ModalHeader>Edit Blog Post</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.state.blogToUpdate}>
                        <FormGroup>
                    {/* TITLE OF ARTICLE */}
                        <Label htmlFor="title">Title of Article:</Label>
                        <Input type="text" placeholder="enter article title here" name="title" htmlForm='title' value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} style={{maxWidth: "500px"}}/>
                        </FormGroup>
                        <FormGroup>
                    {/* CONTENT */}
                        <Label htmlForm="content">Body of Article:</Label>
                        <Input type="text" placeholder="content" name="content" htmlForm="content" value={this.state.content} onChange={(e) => this.setState({content: e.target.value})} style={{maxWidth: "500px", maxHeight: "750px"}} />
                        </FormGroup>
                        <FormGroup>
                    {/* KEYWORDS */}
                        <Label htmlForm='keywords'>Keywords:</Label>
                        <Input type="text" placeholder="enter keywords here" name="keywords" value={this.state.keywords} onChange={(e) => this.setState({keywords: e.target.value})} style={{maxWidth: "500px"}} />
                        </FormGroup>
                        <br />
                        <Button type="submit" color="success">Update</Button>
                    </Form>
                </ModalBody>
            </Modal>
        )
    }
}