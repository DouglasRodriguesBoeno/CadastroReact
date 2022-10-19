import React from "react";
import Main from "../Template/Main";

export default props => {
    return <Main icone="home" titulo="Inicio" subtitulo="Projeto cadastro React.">
        <div className="display-4">Bem vindo!</div>
        <hr />
        <p className="mb-0">Sistema para exeplificar a construção de um cadastro desenvolvido em React.</p>
    </Main>
}