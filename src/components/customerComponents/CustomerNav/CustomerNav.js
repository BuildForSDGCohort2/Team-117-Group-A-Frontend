import React from 'react'
import { Link } from 'react-router-dom'

import './CustomerNav.css'

const CustomerNav = () => {
    return (
        <div className="sideNav">
            <div className="d-flex flex-column">
                <Link to="/ListOfTests">List of Tests</Link>
                <Link to="/RequestATestPage">Request A Tests</Link>
                <Link to="/customer-dashboard">Back To Profile</Link>
                <Link to="/">Logout</Link>
            </div>
        </div>
    )
}

export default CustomerNav
