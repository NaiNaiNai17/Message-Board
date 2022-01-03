import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li><NavLink to='/' exact>MessageBoard</NavLink>  </li>
                <li><NavLink to='/register' exact>Register</NavLink>  </li>
            </ul>
        
        </nav>
    )
}

export default NavBar
