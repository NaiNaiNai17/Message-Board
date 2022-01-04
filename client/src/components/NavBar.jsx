import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li><NavLink to='/messageboard' >MessageBoard</NavLink>  </li>
                <li><NavLink to='/register' >Register</NavLink>  </li>
            </ul>
        
        </nav>
    )
}

export default NavBar
