import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import Signup from '../../auth/Signup';
import Login from '../../auth/Login';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            signup: false,
            login: false,
            //fetchSignupRequest: "",
            //fetchLoginRequest: ""
        }
    }
    onOpenModal = () => {
        this.setState({ signup: true })
    }

    onOpenModalLogin = () => {
        this.setState({ login: true })
    }

    onCloseModal = () => {
        this.setState({ signup: false })
    }

    onCloseModalclose = () => {
        this.setState({ login: false })
    }

    fetchSignupRequest = (e) => {
        e.preventDefault();
        fetch(`https://parkridge-server.herokuapp.com/user/register`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    passwordhash: this.state.passwordhash,
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.state.updateToken(data.sessionToken);
            });
    };
    fetchLoginRequest = (e) => {
        e.preventDefault();
        fetch(`https://parkridge-server.herokuapp.com/user/login`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    passwordhash: this.state.passwordhash
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.state.updateToken(data.sessionToken);
                this.state.modalIsOpen(true);
                this.state.setIsOpen(false);
            });
    };

    render() {
        const { login, signup } = this.state;
        return (
            <>
            <header>
                <Navbar className="header">
                    <NavbarBrand href="/" className="companyName">
                        <img src="./assets/ParkRidge_Logo.png" alt="Park Ridge Community Association" />
                    </NavbarBrand>
                    <Nav className="companyName">Park Ridge Community Association</Nav>
                    <Nav className="ml-auto" navbar>
                        {/* <NavItem>
                            <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
                        </NavItem> */}
                    </Nav>
                </Navbar>
                </header>
                <Modal open={signup} onClose={this.onCloseModal}>
                    <Signup fetchSignupRequest={this.state.fetchSignupRequest} />
                </Modal>
                <Modal open={login} onClose={this.onCloseModalclose}>
                    <Login fetchLoginRequest={this.state.fetchLoginRequest} />
                </Modal>
            </>
        )
    }
}