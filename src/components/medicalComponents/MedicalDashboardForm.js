import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AllCustomerTestReqCon from '../containers/customerTestRequest/AllCustomerTestReqCon'
import AddAcceptedTestCon from '../containers/allTestCon/AddAcceptedTestCon'
import GetAllAcceptedTestCon from '../containers/allTestCon/GetAllacceptedTestCon'
// import GetAcceptedTestByCompanyCon from '../containers/allTestCon/GetAcceptedTestByCompanyCon'
import AddResultsCon from '../containers/allResultsCon/AddResultsCon'
import GetAllResultsCon from '../containers/allResultsCon/GetAllResultsCon'

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
                        <h3>Medical Practitioner Dash Board</h3>
                    </div>
                    <div className="d-flex justify-content-center"></div>
                    <div className="d-flex justify-content-around">
                        <Switch>
                            <Route path="/medical-dashboard/allcustomertestreqcon">
                                <AllCustomerTestReqCon />
                            </Route>
                            <Route path="/medical-dashboard/addacceptedtestcon">
                                <AddAcceptedTestCon />
                            </Route>
                            <Route path="/medical-dashboard/getallacceptedtestcon">
                                <GetAllAcceptedTestCon />
                            </Route>
                            {/* <Route path="/medical-dashboard/getacceptedtestbycompanycon">
                                <GetAcceptedTestByCompanyCon />
                            </Route> */}
                            <Route path="/medical-dashboard/addresultscon">
                                <AddResultsCon />
                            </Route>
                            <Route path="/medical-dashboard/getallresultscon">
                                <GetAllResultsCon />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicalDashboardForm
