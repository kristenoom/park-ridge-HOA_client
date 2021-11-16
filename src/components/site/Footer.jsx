import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { Row } from "reactstrap";

const Footer = () => {
    return (
        <footer>
            <section className="flex-container" id="footer">
                <div className="flex-item-left">
                    {/* <img src="./assets/ParkRidge_logo.png" alt="" className="flex-image-left" width="50px" /> */}
                    <p>
                        <strong>Park Ridge Community Association</strong><br />
                        P.O. Box XXX<br />
                        Warsaw, Indiana 46581
                    </p>
                </div>
                <div className="flex-item-middle">
                    <p><span className="email"><FontAwesomeIcon icon="fas fa-at" />&nbsp;<a href="mailto:parkridgeassociation@gmail.com">parkridgeassociation@gmail.com</a></span></p>
                </div>
                <div className="flex-item-right">
                     <p><a href="https://www.facebook.com/groups/parkridgeassociation" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></p>
                </div>
                </section>
            <Row>
                <center>
                    <p>&copy; 2021 Park Ridge Community Association | Made with React
                        </p>
                    </center>
            </Row>
        </footer>
    )
};

export default Footer;