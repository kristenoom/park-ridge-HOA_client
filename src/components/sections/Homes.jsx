import React, { Component } from 'react'
import { Container, CardColumns, Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

export default class Homes extends Component {
    // const [results, setResults] = useState([]);
    
    // const fetchResults = async () => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data.results);
    //     setResults(data.results);
    // };

    // useEffect(() => {
    //     fetchResults();
    // }, []);
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetchResults();
    // };
  render(props) {
    return (
        <Container className="main text">
            <h1>Homes of Park Ridge</h1>
            <CardColumns>
                {/* {props.results.map(result => {
                return ( */}
                    <Card style={{ width: "300px" }}>
                        <CardBody>
                            <CardTitle tag="h5" className="text">
                                <strong className="text-muted">Insert Address Here</strong>
                            </CardTitle>
                            {/* <CardSubtitle tag="h6" className="mb-2 text-muted">
                                <strong></strong>
                            </CardSubtitle> */}
                        </CardBody>
                        <CardImg top width="100%" src='../src/assets/101.jpeg' alt='Lot 101' />
                        <CardBody>
                            <CardText className="text">
                                <strong>Bed: </strong> 2<br />
                                <strong>Bath: </strong> 2<br />                            
                            </CardText>
                        </CardBody>
                    </Card>
                {/* )
            })} */}
            </CardColumns>
        </Container>
    )
  }
}