import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import BlogCreate from './BlogCreate';
import BlogEdit from './BlogEdit';
//import BlogTable from './BlogTable';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: "",
            updateBlog: "",
            blogToUpdate: "",
            sessionToken: ""
        }
    
        this.state.fetchBlogRequest = (e) => {
            e.preventDefault();
            let sessionToken = localStorage.getItem('token');
            console.log(sessionToken);
            fetch(`https://parkridge-server.herokuapp.com/blog/create`, {
                method: 'GET',
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
                .then((blogData) => {
                    this.state.blog(blogData)
                    console.log(blogData)
                })
        };

        this.setState(() => {
            this.state.fetchBlogRequest();
        }, []);
    
        this.state.editUpdateBlog = (blog) => {
            this.state.blogToUpdate(blog);
            console.log(blog);
        };

        this.state.updateOn = () => {
            this.state.updateActive(true);
        };

        this.state.updateOff = () => {
            this.state.updateActive(false);
        };
    }

    render() {
        return (
        <Container className="main text">
            <Row>
                <Col>
                <h1>Blog</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <BlogCreate fetchBlogRequest={this.state.fetchBlogRequest} sessionToken={this.state.sessionToken} />
                </Col>
            </Row>
            <Row>
                {/* <Col>
                    <BlogTable blog={this.state.blog} updateBlog={this.state.updateBlog} updateOn={this.state.updateOn} fetchBlogRequest={this.state.fetchBlogRequest} sessionToken={this.state.sessionToken} />
                </Col> */}
                {this.state.updateActive ? <BlogEdit blogToUpdate={this.state.blogToUpdate} updateOff={this.state.updateOff} sessionToken={this.state.sessionToken} fetchBlogRequest={this.state.fetchBlogRequest} /> : <></>}        
            </Row>    
        </Container>
        )
    }
}