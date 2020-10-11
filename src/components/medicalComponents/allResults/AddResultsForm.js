import React from 'react'

import { getUserFromLocalStorage } from '../../../utils'

const AddResultsForm = () => {
    const currentUser = getUserFromLocalStorage()
    console.log('user', currentUser)
    return (
        <div className="back">
            <div className="container-*">
                <div className="d-flex justify-content-center">
                    <h1>Add A Result</h1>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="row">
                        <form>
                            <input
                                type="text"
                                name="requestId"
                                id="requestId"
                                className="form-control input-sm"
                                placeholder="Requester's Id"
                                // testname={testname}
                                // onChange={handlechange}
                            />
                            <input
                                type="text"
                                name="testId"
                                id="testId"
                                className="form-control input-sm"
                                placeholder="Test Id"
                                // testname={testname}
                                // onChange={handlechange}
                            />
                            <input
                                type="text"
                                name="customerId"
                                id="customerId"
                                className="form-control input-sm"
                                placeholder="Customer Id"
                                // testname={testname}
                                // onChange={handlechange}
                            />
                            <input
                                type="text"
                                name="companiesId"
                                id="companiesId"
                                className="form-control input-sm"
                                placeholder="Companies Id"
                                // testname={testname}
                                // onChange={handlechange}
                            />
                            <input
                                type="text"
                                name="result"
                                id="result"
                                className="form-control input-sm"
                                placeholder="Result"
                                // testname={testname}
                                // onChange={handlechange}
                            />
                        </form>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="button">Add a Result</button>
                </div>
                <div className="d-flex justify-content-center">
                    <b>
                        <p className="pspace">Note:</p>
                    </b>
                    <p className="pspace">You can only add one result at a time</p>
                </div>
            </div>
        </div>
    )
}
export default AddResultsForm

// Add Result
// Post request to https://moboclinic.herokuapp.com/api/addResult
// {
// "requestId": "21",
// "testId": 31,
// "customerId": 31,
// "companiesId": 1,
// "result": "positive, you have malaria"
// }
