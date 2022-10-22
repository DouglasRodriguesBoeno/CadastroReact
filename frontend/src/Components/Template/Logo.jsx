import React from 'react'
import './Logo.css'
//import logo from '../../assets/imgs/Logo.png'
import { Link } from 'react-router-dom'

export default props => {
    return <aside className='logo'>
        <Link to='/' className='logo'>
            <img alt="logo"></img>
        </Link>
    </aside>
}