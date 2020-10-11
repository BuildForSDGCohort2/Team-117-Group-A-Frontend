import React from 'react'
import CustomerNav from './CustomerNav/CustomerNav'

import './RequestATestForm.css'

const RequestATestForm = ({ handlechange, onsubmitform, address, testid, userid, customerid }) => {
    return (
        <div className="back">
            <CustomerNav />
            <div className="container-*">
                <div className="d-flex justify-content-center">
                    <h1>Request A Test</h1>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="row">
                        <form>
                            <input
                                type="text"
                                name="customerId"
                                id="customerId"
                                className="form-control input-sm"
                                placeholder={`Type only this number ${userid}`}
                                customerid={customerid}
                                onChange={handlechange}
                            />
                            <input
                                type="text"
                                name="testId"
                                id="testId"
                                className="form-control input-sm"
                                placeholder="Number of the test"
                                testid={testid}
                                onChange={handlechange}
                            />
                            <input
                                type="text"
                                name="address"
                                id="address"
                                className="form-control input-sm"
                                placeholder="Your Adress"
                                address={address}
                                onChange={handlechange}
                            />
                        </form>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <input type="submit" value="Request" className="btn-block button" onClick={onsubmitform} />
                </div>
                <div className="d-flex justify-content-center">
                    <b>
                        <p className="pspace">Note:</p>
                    </b>
                    <p className="pspace">You can only make one test request at a time</p>
                </div>
            </div>
        </div>
    )
}

export default RequestATestForm

// Add Request
// Post request to https://moboclinic.herokuapp.com/api/addRequest

// {
//   "testId": 31,
//   "customerId": 31,
//   "address": "55 Avenue"
// }
