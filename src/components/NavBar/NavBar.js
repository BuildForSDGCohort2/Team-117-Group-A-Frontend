import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { AppContext } from '../../context'
import { getUserFromLocalStorage } from '../../utils'

import './NavBar.css'

const HeaderBar = () => {
    const { handleLogOut } = useContext(AppContext)
    const isAuth = getUserFromLocalStorage()

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand>{isAuth ? <Link to="/">MoboClinic</Link> : null}</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                {isAuth ? null : <Link to="/login">Login</Link>}
                {isAuth ? null : <Link to="/sign-up">Signup</Link>}
                {isAuth ? (
                    <Link to="/login" onClick={handleLogOut}>
                        SignOut
                    </Link>
                ) : null}
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
