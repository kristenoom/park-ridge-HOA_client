import {Row} from "reactstrap";

const Footer = () => {
    return (
        <footer>
            <Row>
            <p><span className="email"><i className="icon-mail"></i> parkridgeassociation@gmail.com</span> | <a href="https://www.facebook.com/groups/parkridgeassociation" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></p>
            </Row>
            <Row>
                <p>&copy; 2021 Park Ridge Community Association | Made with React</p>
            </Row>
        </footer>
    )
};

export default Footer;