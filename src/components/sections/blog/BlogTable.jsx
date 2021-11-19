import React from 'react';
import { Table, Button } from 'reactstrap';
//import APIURL from '../helpers/Environment';

const BlogTable = (props) => {
    
    const deleteBlog = (blog) => {
         console.log(blog.name);
         console.log(props.token);

         fetch(`https://parkridge-server.herokuapp.com/blog/${blog.id}`, {
             method: 'DELETE',
             headers: new Headers({
                 'Content-Type': 'application/json',
                 'Authorization': props.token
             })
         })
         .then(() => this.props.fetchBlogRequest())
    }

    const blogMapper = () => {
        return props.blogs.map((blog, index) => {
            return (
                <tr key={index} className="text">
                    <td>{blog.id}</td>
                    <td>{blog.name}</td>
                    <td>{blog.address}</td>
                    <td>{blog.document1}</td>
                    <td>{blog.document2}</td>
                    <td>
                        <Button color="warning" onClick={() => { props.editUpdateBlog(blog); props.updateOn() }}>Update</Button>
                        <Button color="danger" onClick={() => { deleteBlog(blog) }}>Delete &ndash;</Button>
                    </td>
                </tr>
            )
        })
    }
    
    return(
        <Table striped>
            <thread>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Document 1</th>
                    <th>Document 2</th>
                </tr>
            </thread>
            <tbody>
                {blogMapper()}
            </tbody>
        </Table>
    )
}

export default BlogTable;