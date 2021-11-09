import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';
import ArcCreate from './ArcCreate';
import ArcEdit from './ArcEdit';
import ArcTable from './ArcTable';
import APIURL from '../helpers/Environment';

export default class Arc extends Component {
    const [arc, setArc] = useState([]);
    const [updateArc, setUpdateArc] = useState(false);
    const [arcToUpdate, setArcToUpdate] = useState({});

    const fetchArcRequest = () => {
        let sessionToken = localStorage.getItem('token');
        console.log(sessionToken);
        fetch(`https://parkridge-server.herokuapp.com/arc/create`. {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': sessionToken
            })
        })
            .then((res) => res.json())
            .then((arcData) => {
                setArc(arcData)
                console.log(arcData)
            })
    };

    useEffect(() => {
        fetchArcRequest();
    }, []);
    
    const editUpdateArc = (arc) => {
        setArcToUpdate(arc);
        console.log(arc);
    };

    const updateOn = () => {
        setUpdateActive(true);
    };

    const updateOff = () => {
        setUpdateActive(false);
    };

    render(props) {
        return (
        <Container className="main text">
            <Row>
                <Col>
                <h1>Architectural Review Committee</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <ArcCreate fetchArcRequest={fetchArcRequest} token={props.token} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ArcTable arc={arc} editUpdateArc={editUpdateArc} updateOn={updateOn} fetchArcRequest={fetchArcRequest} token={props.token} />
                </Col>
                {updateActive ? <ArcEdit arcToUpdate={arcToUpdate} updateOff={updateOff} token={props.token} fetchArcRequest={fetchArcRequest} /> : <></>}        
            </Row>    
        </Container>
        )
    }
}