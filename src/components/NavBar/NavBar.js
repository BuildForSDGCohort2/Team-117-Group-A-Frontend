import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context'

import './NavBar.css'

const user = JSON.parse(localStorage.getItem('user'))

const HeaderBar = () => {
    const { handleLogOut } = useContext(AppContext)
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">
                    {user?.id ? <Link to="/">MoboClinic</Link> : <Link to="/login">MoboClinic</Link>}
                </Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Link to="/medical-signup">Medical Signup</Link>
                {user?.id ? null : <Link to="/sign-up">Signup</Link>}
                {user?.id ? <Link onClick={handleLogOut}>Logout</Link> : null}
            </Navbar>
        </div>
    )
}

export default HeaderBar
