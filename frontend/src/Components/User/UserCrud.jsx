import React, { Component } from "react";
import Axios from 'axios'
import Main from "../Template/Main"

/*
    PASSAR AS FUNCTION ONCLICK PARA UM CONSTRUCTOR
    CRIAR UM COMPONENT PARA O FORM
*/

const headerProps = {
    icone: 'users',
    titulo: 'Usuarios',
    subtitulo: 'Cadastro usuários'
}

const baseUrl = 'http://localhost:3001/users'
const initalState = {
    user: { name: '', email: '' },
    list: []
}

export default class Crud extends Component {

    state = { ...initalState }

    clear() {
        this.setState({ user: initalState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        Axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initalState.user, list })
            })
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateFild(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="name"
                                value={this.state.user.name} onChange={e => this.updateFild(e)}
                                placeholder="Digite seu nome" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="email"
                                value={this.state.user.email} onChange={e => this.updateFild(e)}
                                placeholder="Digite seu email" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}