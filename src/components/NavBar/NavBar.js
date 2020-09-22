import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { AppContext } from '../../context'

import './NavBar.css'

const HeaderBar = () => {
    const { handleLogout, currentUser } = useContext(AppContext)
    // const isAuth = !!currentUser.id
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <Link to="/">MoboClinic</Link>
                </Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Link to="/login">Logon</Link>
                <Link to="/sign-up">Signup</Link>
                <Link to="/login" onClick={handleLogout}>
                    SignOut
                </Link>
                <Link to="/medical-signup">Medical Signup</Link>
                <Link to="/customerDashBoard">Customer Dashboard</Link>
            </Navbar>
        </div>
    )
}

export default HeaderBar
