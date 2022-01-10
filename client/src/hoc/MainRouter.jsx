import React from 'react'
import { BrowserRouter as Router, Route,Routes, Redirect} from 'react-router-dom'
import NavBar from '../components/NavBar'
import Landing from '../views/login/Landing'
import Register from '../views/register/Register'
import MessageBoard from '../views/messageboard/MessageBoard'
import Logout from '../views/logout/Logout'

const MainRouter = () => {
    return (
        <Router>
        <NavBar/>
        <main>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/register' element={<Register/>} />
                <Route path='/messageboard' element={<MessageBoard/>} />
                <Route path='/logout' element={<Logout/>} />
            </Routes>
        </main>
        </Router>
    )
}

export default MainRouter
