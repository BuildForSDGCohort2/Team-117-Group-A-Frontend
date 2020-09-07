import React from 'react'
import { Link } from 'react-router-dom'

import './CustomerNav.css'

const CustomerNav = () => {
    return (
        <div className="sideNav">
            <div className="d-flex flex-column">
                <Link to="/availableTestsCon">List of Tests</Link>
                <Link to="/requestATestForm">Request A Tests</Link>
                <Link to="/customerDashBoardPage">Back To Profile</Link>
                <Link to="/">Logout</Link>
            </div>
        </div>
    )
}

export default CustomerNav
