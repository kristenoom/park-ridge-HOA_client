import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';

const Z101 = (props) => {

    return (        
        <Card style={{ width: "300px" }}>
            <CardBody>
                <CardTitle tag="h5" className="text">
                    <strong className="text-muted">2165 Lindenwood Ave</strong>
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted"><strong>Lot 101</strong></CardSubtitle>
            </CardBody>
            <CardImg top width="100%" src='../../assets/101.jpeg' alt='Lot 101' />
            <CardBody>
                <CardText className="text">
                    <strong>Bed: </strong> 3<br />
                    <strong>Bath: </strong> 2.5<br />
                    <strong>Garage:</strong> 3<br />
                    <strong>Square Footage:</strong> 1,646<br />
                    <strong>Acreage:</strong> 0.27<br />
                </CardText>
            </CardBody>
        </Card>
    )
  }

export default Z101;