import React, { Component } from "react";
import Axios from 'axios'
import Main from "../Template/Main"

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
                this.setState({user: initalState.user, list})
            })
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    render() {
        return (
            <Main {...headerProps}>
                Cadastro de usuários
            </Main>
        )
    }
}