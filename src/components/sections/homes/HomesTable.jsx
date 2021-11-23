import React from 'react';
import { CardColumns, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
//import APIURL from '../helpers/Environment';

const HomesTable = (props) => {

    const homesMapper = () => {
        return props.homess.map((homes, index) => {
            return (
                <Card key={index} style={{ width: "300px" }}>
                    <CardBody>
                        <CardTitle tag="h5" className="text">
                            <strong className="text-muted">Insert Address Here</strong>
                        </CardTitle>
                        {/* <CardSubtitle tag="h6" className="mb-2 text-muted"><strong></strong></CardSubtitle> */}
                    </CardBody>
                    {/* <CardImg top width="100%" src='../src/assets/101.jpeg' alt='Lot 101' /> */}
                    <CardBody>
                        <CardText className="text">
                            <strong>Bed: </strong> {homes.bedroom}<br />
                            <strong>Bath: </strong> {homes.bathroom}<br />
                            <strong>Garage:</strong> {homes.garage}<br />
                            <strong>Square Footage:</strong> {homes.squareFootage}<br />
                            <strong>Acreage:</strong> {homes.acreage}<br />
                        </CardText>
                    </CardBody>
                    <Button color="warning" onClick={() => { props.editUpdateHomes(homes); props.updateOn() }}>Update</Button>
                    <Button color="danger" onClick={() => { deleteHomes(homes) }}>Delete &ndash;</Button>
                </Card>
            )
        })
    }

    const deleteHomes = (homes) => {
        console.log(homes.id);
        console.log(props.token);

        fetch(`https://parkridge-server.herokuapp.com/homes/${homes.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => this.props.fetchHomesRequest())
   }
    
    return (
        <>
            <CardColumns>
                {homesMapper()}
            </CardColumns>
        </>
    )
}

export default HomesTable;