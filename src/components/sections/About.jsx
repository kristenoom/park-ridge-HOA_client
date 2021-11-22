import React, { Component } from 'react';
import { Container, CardColumns, Row, Col, Card, CardBody, CardSubtitle, CardImg, CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
        <Container className="main text">
            <h1>About</h1>
            Established in 2007. Park Ridge is a community of 134 single-family homes built by Granite Ridge. All single-family homes feature a 2- or 3-car garage with plenty of living and storage space.
            <h4>Where are we located?</h4>
            <p>Our community is located south of Downtown Warsaw, just off of Rt. 15 via County Farm Road. Park Ridge Church is located at our entrance.</p>
            <h5>Directions:</h5>
            <p>From Fort Wayne: Take US-30 into Warsaw. Turn left at Center Street. Turn left onto Detroit Street/HWY-15. Follow signs for HWY-15. Veer to the left onto Ranch Road (Red Horse Bait Shop on corner). Go down the road, and Park Ridge is just over a mile on the right.</p>
                <br />
            <h4>Board of Directors</h4>
            <CardColumns>
                <Row>
                    <Col>
                    <Card color="light" sm='3'>
                        <CardBody>
                            <CardTitle tag="h5" className="text">
                                <strong className="text-muted">President</strong>
                            </CardTitle>
                        </CardBody>
                        <CardImg top width="100%" src='./assets/president.jpeg' alt='President' />
                        <CardBody>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                <strong>Kristen Oom</strong>
                            </CardSubtitle>
                            <CardText className="text">
                                Resident Since 2020<br />          
                            </CardText>
                        </CardBody>
                        </Card>
                        <Modal centered scrollable size="" toggle={function noRefCheck(){}}>
                            <ModalHeader toggle={function noRefCheck(){}}>
                            Kristen Oom
                            </ModalHeader>
                            <ModalBody>
                            Kristen and her husband moved to Park Ridge in August 2020 for his job. She is a programmer while her husband is an engineer working for the railroad. Prior to living in Park Ridge, Kristen and her husband lived in Wisconsin.
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={function noRefCheck(){}}>
                                Close
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                    <Col>
                    <Card color="light" sm='3'>
                        <CardBody>
                            <CardTitle tag="h5" className="text">
                                <strong className="text-muted">Vice President</strong>
                            </CardTitle>
                        </CardBody>
                        <CardImg top width="100%" src='./assets/vpresident.jpeg' alt='Vice President' />
                        <CardBody>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                <strong>Roberto Perez-de-Frias</strong>
                            </CardSubtitle>
                            <CardText className="text">
                                Resident Since 2017<br />          
                            </CardText>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col>
                <Card sm='3' color="light">
                        <CardBody>
                            <CardTitle tag="h5" className="text">
                                <strong className="text-muted">Treasurer</strong>
                            </CardTitle>
                        </CardBody>
                        <CardImg top width="100%" src='./assets/treasurer.png' alt='Treasurer' />
                        <CardBody>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                <strong>Zach Tingle</strong>
                            </CardSubtitle>
                            <CardText className="text">
                                Resident Since 2020<br />          
                            </CardText>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col>
                <Card sm='3' color="light">
                        <CardBody>
                            <CardTitle tag="h5" className="text">
                                <strong className="text-muted">Secretary</strong>
                            </CardTitle>
                        </CardBody>
                        <CardImg top width="100%" src='./assets/secretary.jpeg' alt='Secretary' />
                        <CardBody>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                <strong>Lauren</strong>
                            </CardSubtitle>
                            <CardText className="text">
                                Resident Since 2020<br />          
                            </CardText>
                        </CardBody>
                </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                <Card sm='3' color="light">
                        <CardBody>
                            <CardTitle tag="h5" className="text">
                                <strong className="text-muted">Board Member</strong>
                            </CardTitle>
                        </CardBody>
                        <CardImg top width="100%" src='./assets/boardMember1.png' alt='board member' />
                        <CardBody>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                <strong>Aaron Gaff</strong>
                            </CardSubtitle>
                            <CardText className="text">
                                Resident Since 2013<br />
                                Architectural Control Committee<br />
                            <em>Former President</em>
                            </CardText>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col>
                    <Card color="light">
                        <CardBody>
                            <CardTitle tag="h5" className="text">
                                <strong className="text-muted">Board Member</strong>
                            </CardTitle>
                        </CardBody>
                        <CardImg top width="100%" src='./assets/boardMember2.png' alt='board member' />
                        <CardBody>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                <strong>Rob Barker</strong>
                            </CardSubtitle>
                            <CardText className="text">
                            Resident Since 2013<br />
                            Architectural Control Committee
                            </CardText>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col>
                    <Card color="light">
                        <CardBody>
                            <CardTitle tag="h5" className="text">
                                <strong className="text-muted">Board Member</strong>
                            </CardTitle>
                        </CardBody>
                        <CardImg top width="100%" src='./assets/boardMember3.png' alt='board member' />
                        <CardBody>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                <strong>Sharon Brown</strong>
                            </CardSubtitle>
                            <CardText className="text">
                            Resident Since 2018<br />
                            </CardText>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col>
                    <Card color="light">
                        <CardBody>
                            <CardTitle tag="h5" className="text">
                                <strong className="text-muted">Board Member</strong>
                            </CardTitle>
                        </CardBody>
                        <CardImg top width="100%" src='./assets/boardMember4.png' alt='board member' />
                        <CardBody>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                <strong>Cindy Shoemaker</strong>
                            </CardSubtitle>
                            <CardText className="text">
                            Resident Since 2008<br />
                            </CardText>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </CardColumns>
      </Container>
    )
  }
}