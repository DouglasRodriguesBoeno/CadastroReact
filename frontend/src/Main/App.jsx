import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

//components
import Logo from "../Components/Template/Logo";
import Footer from "../Components/Template/Footer";
import Nav from "../Components/Template/Nav";
import Home from "../Components/home/Home";

export default props => {
    return <div className="app">
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>
}