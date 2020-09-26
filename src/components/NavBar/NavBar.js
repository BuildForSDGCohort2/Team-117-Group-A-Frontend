import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context'

import './NavBar.css'

const HeaderBar = () => {
    const { handleLogOut } = useContext(AppContext)
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Link to="/">MoboClinic</Link>
                <Nav className="mr-auto"></Nav>
                <Link to="/medical-signup">Medical Signup</Link>
                <Link to="/sign-up">Signup</Link>
                <Link to="/CustomerDashBoardPage">Customer Dashboard</Link>
                <Link to="/AminPage">Admin</Link>
                <Link to="/" onClick={handleLogOut}>
                    Logout
                </Link>
            </Navbar>
        </div>
    )
}

export default HeaderBar
