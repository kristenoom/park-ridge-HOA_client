import React, { Component } from 'react';
import { FormGroup, Input } from 'reactstrap';

export default class ArcCreate extends Component {
    const[name1, setName1] = useState('');
    const[address, setAddress] = useState('');
    const[document1, setDocument1] = useState('');
    const[document2, setDocument2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://parkridge-server.herokuapp.com/arc/create`, {
            method: 'POST',
            body: JSON.stringify({
                residentName: name,
                address: address,
                document1: document1,
                document2, document2
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': sessionToken
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setName('');
                setAddress('');
                setDocument1('');
                setDocument2('');
                this.props.fetchArc();
            })
    }

    render(props) {
        return (
            <Container className="main text">
                <FormGroup>
                    <Label htmlForm="name" value={name} onChange{(e) => setName(e.target.value)} >Name</Label>
                    <Input type="text" name="name" />
                    <Label htmlForm='address' value={address} onChange{(e) => setName(e.target.value)} />
                    <Input type="text" name="address" />
                    <Label htmlForm='document1' value={document1} onChange{(e) => setDocument1(e.target.value)} />
                    <Input type="file" name="document1" placeholder='Drawing 1' />
                    <br />
                    <Label htmlForm='document2' value={document2} onChange{(e) => setDocument2(e.target.value)} />
                    <Input type="file" name="document2" placeholder='Drawing 2' />
                </FormGroup>
            </Container>
        )
    }
};