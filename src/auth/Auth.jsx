import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Login from './Login'
import Signup from './Signup';

const Auth = (props) => {
    return (
        <>
            <br />
        <Container className='master-container'>
            <Row>
                <Col md='5'>
                   <Signup updateToken={props.updateToken}/>
                </Col>
                <Col md='4'>
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
            </Container>
            </>
    )
}

export default Auth;