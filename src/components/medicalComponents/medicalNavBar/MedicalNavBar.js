import React from 'react'
import { Link } from 'react-router-dom'

// import './CustomerNav.css'

const MedicalNavBar = () => {
    return (
        <div className="sideNav">
            <div className="d-flex flex-column">
                <Link to="/">1</Link>
                <Link to="/">2</Link>
                <Link to="/">3</Link>
            </div>
        </div>
    )
}

export default MedicalNavBar
