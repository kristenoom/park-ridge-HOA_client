import React, { Component } from 'react'
import { Container } from 'reactstrap';

export default class Sidebar extends Component {
  render() {
    return (
        <Container className="text">
        <div>
          <nav href="#navbar" data-toggle="collapse" data-target="#navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1><a href="index.html">Park Ridge Association</a></h1>
              <span className="email"><i className="icon-mail"></i> parkridgeassociation@gmail.com</span>
            </div>
            <nav role="navigation" className="navbar">
                <div id="navbar" className="collapse">
                    <ul>
                        <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                        <li><a href="#about" data-nav-section="about">About</a></li>
                        <li><a href="#arc" data-nav-section="arc">Architectural Review</a></li>
                        <li><a href="#homes" data-nav-section="homes">Homes</a></li>
                        <li><a href="#resources" data-nav-section="resources">Resources</a></li>
                        {/* <li><a href="#blog" data-nav-section="blog">Blog</a></li> */}
                    </ul>
                </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/groups/parkridgeassociation" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
                <p>
                    <small>
                        Made with <i className="icon-heart" aria-hidden="true" /> and React<br /><br />
                    </small>
                </p>
            </div>
          </aside>
        </div>
      </Container>
    )
  }
}