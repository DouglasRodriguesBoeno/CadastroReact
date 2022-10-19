import React from "react";
import './Nav.css'

export default props => {
    return <aside className="menu-area">
        {/* CRIAR COMPONENTES DE NAVEGAÇÃO */}
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i> Inicio
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Usuários
            </a>
        </nav>
    </aside>
}