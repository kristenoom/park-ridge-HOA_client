import React from 'react';
import { Container } from 'reactstrap';

const Resources = (props) => {
    return (
        <Container className="main text">
            <h1>Resources</h1>
            <section className="flex-container">
                <div className="flex-item-left">
                    <h3>Safety</h3>
                    <p>Police, Fire and Emergency<br />Dial 9-1-1</p>
                    <p>Warsaw Police<br />(Non-Emergency)<br />574-372-9511</p>
                    <p>Kosciosko County<br />866-322-5857</p>
                    <p>Indiana State Police<br />574-233-1123</p>
                    <p>Poison Control Center<br />800-222-1222</p>
                </div>
                <div className="flex-item-middle">
                    <h3>Utilities</h3>
                    <p>NIPSCO<br />800-464-7726</p>
                    <p>Indiana American Water<br />800-492-8373</p>
                    <p>Warsaw Wastewater<br />574-392-9562</p>
                    <p>Indiana 811<br />
                    Dial 811</p>
                </div>
                <div className="flex-item-right">
                    <h3>Community</h3>
                    <p>Warsaw Schools<br />574-371-5098</p>
                    <p>Warsaw Parks<br />574-372-9554</p>
                </div>
            </section>
      </Container>
    )
  }
export default Resources;