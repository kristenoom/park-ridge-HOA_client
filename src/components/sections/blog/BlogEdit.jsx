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
                            <Label htmlForm="title">Title:</Label>
                            <Input name="title" value={this.state.title} onChange={(e) => this.setState({ title: this.state.title })} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlForm="content">Address:</Label>
                            <Input name="content" value={this.state.content} onChange={(e) => this.setState({ content: this.state.content })} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlForm="keywords">Document 1:</Label>
                            <Input name="keywords" value={this.state.keywords} onChange={(e) => this.setState({ keywords: this.state.keywords })} />
                        </FormGroup>
                        <Button type="submit" color="success">Update</Button>
                    </Form>
                </ModalBody>
            </Modal>
        )
    }
}