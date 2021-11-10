import React from 'react';
import { Table, Button } from 'reactstrap';
//import APIURL from '../helpers/Environment';

const ArcTable = (props) => {
    //code is here to allow users to delete if we decide to let users delete requests in the future
    //const deleteArc = (arc) => {
    //     console.log(arc.name);
    //     console.log(props.token);

    //     fetch(APIURL + `/arc/${arc.id}`, {
    //         method: 'DELETE',
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.token
    //         })
    //     })
    //     .then(() => this.props.fetchArcRequest())
    // }

    const arcMapper = () => {
        return props.arcs.map((arc, index) => {
            return (
                <tr key={index} className="text">
                    <td>{arc.id}</td>
                    <td>{arc.name}</td>
                    <td>{arc.address}</td>
                    <td>{arc.document1}</td>
                    <td>{arc.document2}</td>
                    <td>
                        <Button color="warning" onClick={() => { props.editUpdateArc(arc); props.updateOn() }}>Update</Button>
                        {/* <Button color="danger" onClick={() => { deleteArc(arc) }}>Delete &ndash;</Button> */}
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
                {arcMapper()}
            </tbody>
        </Table>
    )
}

export default ArcTable;