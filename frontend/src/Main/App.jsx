import React from "react";
import './App.css'

//components
import Logo from "../Components/Template/Logo";
import Footer from "../Components/Template/Footer";
import Main from "../Components/Template/Main";
import Nav from "../Components/Template/Nav";

export default props => {
    return <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>
}