import React from 'react'
import { BrowserRouter as Router, Route,Routes, Redirect} from 'react-router-dom'
import NavBar from '../components/NavBar'
import Landing from '../views/Landing'

const MainRouter = () => {
    return (
        <Router>
        <NavBar/>
        <main>
            <Routes>
                <Route path='/' element={<Landing/>}/>
            </Routes>
        </main>
        </Router>
    )
}

export default MainRouter
