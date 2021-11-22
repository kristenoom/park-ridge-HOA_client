import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/site/Header.jsx";
import Sidebar from "./components/site/Sidebar.jsx";
import Footer from "./components/site/Footer.jsx";

import { BrowserRouter } from 'react-router-dom';

const App = () => {

    return (
        <div>
            <BrowserRouter>
            <Header />
            <Sidebar />
            <Footer />
            </BrowserRouter>
        </div>
    );
};
    
export default App;