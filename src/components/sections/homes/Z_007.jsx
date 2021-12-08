import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';

const Z007 = (props) => {

    return (
        <Card style={{ width: "300px" }}>
            <CardBody>
                <CardTitle tag="h5" className="text">
                    <strong className="text-muted">2132 Highlander Drive</strong>
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted"><strong>Lot 007</strong></CardSubtitle>
            </CardBody>
            <CardImg top width="100%" src='../../assets/007.jpeg' alt='Lot 007' />
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

export default Z007;