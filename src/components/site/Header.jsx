import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
    return (
        <header>
            <Navbar className="header">
                <NavbarBrand href="/">
                    <img src=".../assets/ParkRidge_Logo.png" alt="" />Park Ridge Association
                </NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="www.facebook.com">Facebook</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    )
}

export default Header;