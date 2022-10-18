import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

//components
import Logo from "../Components/Template/Logo";
import Footer from "../Components/Template/Footer";
import Main from "../Components/Template/Main";
import Nav from "../Components/Template/Nav";

export default props => {
    return <div className="app">
        <Logo />
        <Nav />
        <Main icone="home" titulo="Inicio" subtitulo="Projeto cadastro React."/>
        <Footer />
    </div>
}