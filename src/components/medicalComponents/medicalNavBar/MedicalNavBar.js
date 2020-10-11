import React from 'react'
import { Link } from 'react-router-dom'

const MedicalNavBar = () => {
    return (
        <div className="sideNav">
            <div className="d-flex flex-column">
                <Link to="/medical-dashboard/allcustomertestreqcon">All test requests</Link>
                <Link to="/medical-dashboard/addacceptedtestcon">Add accepted test</Link>
                <Link to="/medical-dashboard/getallacceptedtestcon">Get all accepted test</Link>
                {/* <Link to="/medical-dashboard/getacceptedtestbycompanycon">Get accepted test by company</Link> */}
                <Link to="/medical-dashboard/addresultscon">Add results</Link>
                <Link to="/medical-dashboard/getallresultscon">Get all results</Link>
            </div>
        </div>
    )
}

export default MedicalNavBar
