import { Route, Link, Switch } from 'react-router-dom';
import Signup from '../../auth/Signup';
import Login from '../../auth/Login';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

const Header = (props) => {
    return (
        <header>
            <Navbar className="header">
                <NavbarBrand href="/" className="companyName">
                    <img src="./assets/ParkRidge_Logo.png" alt="Park Ridge Community Association" />
                </NavbarBrand>
                <Nav className="companyName">Park Ridge Community Association</Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        {/* <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                        <Switch>
                            <Route exact path="/register"><Signup token={props.token} /></Route>
                            <Route exact path="/login"><Login token={props.token} /></Route>
                        </Switch> */}
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    )
}

export default Header;