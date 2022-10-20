import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom';

//components
import Logo from "../Components/Template/Logo";
import Footer from "../Components/Template/Footer";
import Nav from "../Components/Template/Nav";
import Routes from "./Routes";

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
