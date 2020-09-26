import React from 'react'

import CustomerNav from './CustomerNav/CustomerNav'
import HeaderBar from '../NavBar/NavBar'

import './CustomerDashBoardForm.css'

const CustomerDashBoardForm = () => {
    return (
        <div className="back">
            <HeaderBar />
            <CustomerNav />
            <div>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <h3>Welcome to your profile Mr. Patient</h3>
                    </div>
                    <div className="d-flex justify-content-center">
                        <h4>Test Results</h4>
                    </div>
                    <div className="d-flex justify-content-around">
                        <b>
                            <p className="outcome">Test Name</p>
                        </b>
                        <b>
                            <p className="outcome">Result</p>
                        </b>
                        <b>
                            <p className="outcome">Date</p>
                        </b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDashBoardForm
