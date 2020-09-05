import React from 'react'
import { Link } from 'react-router-dom'

import './CustomerNav.css'

const CustomerNav = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    return (
        <div className="sideNav">
            <div className="d-flex flex-column">
                <Link to="/AvailableTestsCon">List of Tests</Link>
                <Link to="/RequestATestForm">Request A Tests</Link>
                <Link to="/CustomerDashBoardPage">Back To Profile</Link>
                <Link to="/">Logout</Link>
            </div>
        </div>
    )
}

export default CustomerNav
