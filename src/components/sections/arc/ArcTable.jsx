import React from 'react';
import { Table, Button } from 'reactstrap';
//import APIURL from '../helpers/Environment';

const ArcTable = (props) => {
    const arcMapper = props.arcs.map((arc, index) =>
        <tr key={index} className="text">
            <td>{arc.id}</td>
            <td>{arc.name}</td>
            <td>{arc.address}</td>
            <td>{arc.document1}</td>
            <td>{arc.document2}</td>
            <td>
                <Button color="warning" onClick={() => { props.editUpdateArc(arc); props.updateOn() }}>Update</Button>
            </td>
        </tr>
    );

    
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
                {arcMapper()}
            </tbody>
        </Table>
    )
}

export default ArcTable;