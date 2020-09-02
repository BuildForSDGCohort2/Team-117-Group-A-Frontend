import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './NavBar.css'

const HeaderBar = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <Link to="/">MoboClinic</Link>
                </Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Link to="/LogonPage">Logon</Link>
                <Link to="/SignupPage">Signup</Link>
            </Navbar>
        </div>
    )
}

export default HeaderBar
