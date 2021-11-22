import React from 'react'
import { Container } from 'reactstrap';

const Home = (props) => {
    return (
      <Container className="main text">
            <h1>Welcome to Park Ridge of Warsaw</h1>
            <p>This quiet homeowners association was created in 2007 and hosts 134 homes. It is nestled off of Ranch Road just South of Downtown Warsaw.</p>
            <p><strong>Neighborhood Information:</strong><br />
                HOA Fees: $175 annually
            </p>
            <section className="flex-container">
                <img src="./assets/playground.jpg" alt="Park Ridge Playground" className="flex-image-left" />
                <img src="./assets/pond.jpg" alt="Park Ridge Pond" className="flex-image-right" />
            </section>
      </Container>
    )
}

export default Home;