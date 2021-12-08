import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';

const Z105 = (props) => {

    return (
        <Card style={{ width: "300px" }}>
            <CardBody>
                <CardTitle tag="h5" className="text">
                    <strong className="text-muted">2125 Lindenwood Avenue</strong>
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <strong>Lot 105</strong>
                </CardSubtitle>
            </CardBody>
            <CardImg top width="100%" src='../../assets/105.jpeg' alt='Lot 105' />
            <CardBody>
                <CardText className="text">
                    <strong>Bed: </strong> <br />
                    <strong>Bath: </strong> <br />
                    <strong>Garage:</strong> <br />
                    <strong>Square Footage:</strong> <br />
                    <strong>Acreage:</strong> <br />
                </CardText>
            </CardBody>
        </Card>
    )
  }

export default Z105;