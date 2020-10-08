import React from 'react'

import MedicalNavBar from './medicalNavBar/MedicalNavBar'
import HeaderBar from '../NavBar/NavBar'

import './MedicalDashboardForm.css'

const MedicalDashboardForm = () => {
    return (
        <div className="back">
            <HeaderBar />
            <MedicalNavBar />
            <div>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <h3>Welcome to your profile Mr. Medical Practitioner</h3>
                    </div>
                    <div className="d-flex justify-content-center">
                        <h4>Functions</h4>
                    </div>
                    <div className="d-flex justify-content-around">
                        <b>
                            <p className="outcome">Button 1</p>
                        </b>
                        <b>
                            <p className="outcome">Button 2</p>
                        </b>
                        <b>
                            <p className="outcome">Button 3</p>
                        </b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicalDashboardForm
