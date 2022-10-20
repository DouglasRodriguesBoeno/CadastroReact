import React, {Component} from "react";
import Main from "../Template/Main"

const headerProps = {
    icone: 'users',
    titulo: 'Usuarios',
    subtitulo: 'Cadastro usuários'
}

export default class Crud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de usuários 
            </Main>
        )
    }
}