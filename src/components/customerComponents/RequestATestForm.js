import React from 'react'
import CustomerNav from './CustomerNav/CustomerNav'

import './RequestATestForm.css'

const RequestATestForm = () => {
    return (
        <div className="back">
            <CustomerNav />
            <div className="container-*">
                <div className="d-flex justify-content-center">
                    <h1>Request Form</h1>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="row">
                        <form>
                            <input
                                type="text"
                                name="test_name"
                                id="test_name"
                                className="form-control input-sm"
                                placeholder="Name of the test"
                            />
                            <input
                                type="text"
                                name="patient_adress"
                                id="patient_adress"
                                className="form-control input-sm"
                                placeholder="Adress where test must be done"
                            />
                        </form>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="button">Request the test</button>
                </div>
                <div className="d-flex justify-content-center">
                    <b>
                        <p className="pspace">Note:</p>
                    </b>
                    <p className="pspace">You can only make one request one test at a time</p>
                </div>
            </div>
        </div>
    )
}

export default RequestATestForm
