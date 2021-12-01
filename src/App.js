import React, {useState, useEffect} from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/site/Header.jsx";
import Sidebar from "./components/site/Sidebar.jsx";
import Footer from "./components/site/Footer.jsx";

import { BrowserRouter } from 'react-router-dom';

const App = () => {
    const [sessionToken, setSessionToken] = useState('');

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setSessionToken(localStorage.getItem('token'))
        }
    }, []);

    const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
        console.log(sessionToken);
    }

        return (
            <>
                <BrowserRouter>
                    <Header />
                    <Sidebar updateToken={updateToken} token={sessionToken} />
                    <Footer />
                </BrowserRouter>
            </>
        );
    };

export default App;