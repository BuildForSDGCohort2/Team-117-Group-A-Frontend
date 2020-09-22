import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { AppContext } from '../../context'

import './NavBar.css'

const HeaderBar = () => {
    const { handleLogout, currentUser } = useContext(AppContext)
    const isAuth = !!currentUser.id
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <Link to="/">MoboClinic</Link>
                </Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                {isAuth ? null : <Link to="/login">Logon</Link>}
                {isAuth ? null : <Link to="/sign-up">Signup</Link>}
                {isAuth ? <Link onClick={handleLogout}>SignOut</Link> : null}
                {isAuth ? <Link to="/medical-signup">Medical Signup</Link> : null}
                {isAuth ? <Link to="/customerDashBoard">Customer Dashboard</Link> : null}
            </Navbar>
        </div>
    )
}

export default HeaderBar
