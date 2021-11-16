import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/site/Header.jsx";
import Sidebar from "./components/site/Sidebar.jsx";
import Footer from "./components/site/Footer.jsx";
import { BrowserRouter as Router, } from 'react-router-dom';

const App = () => {
    return (
        <div>
          <Header />
          <Router>
            <Sidebar />
          </Router>
          <Footer />
        </div>
      );
    };
    
export default App;