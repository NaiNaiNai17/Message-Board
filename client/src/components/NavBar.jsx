import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    const [login, setLogin] = useState(false)
    return (
        <nav className='nav'>
            <ul className='nav-list'>
            <li><NavLink to='/' >Home</NavLink>  </li>
                <li style={{display: login ? 'block' : 'none'}}><NavLink to='/messageboard'>MessageBoard</NavLink>  </li>
                <li style={{display: !login ? 'block' : 'none'}}><NavLink to='/register' >Register</NavLink>  </li>
                <li style={{display: login ? 'none' : 'block'}}><NavLink to='/logout' >Logout</NavLink>  </li>

            </ul>
        
        </nav>
    )
}

export default NavBar
