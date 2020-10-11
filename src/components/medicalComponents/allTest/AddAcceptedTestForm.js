import React from 'react'

import { getUserFromLocalStorage } from '../../../utils'

const AddAcceptedTestForm = () => {
    const currentUser = getUserFromLocalStorage()
    console.log('user', currentUser)
    return (
        <div className="back">
            <div className="container-*">
                <div className="d-flex justify-content-center">
                    <h1>Add Accepted Test</h1>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="row">
                        <form>
                            <input
                                type="requestId"
                                name="requestId"
                                id="requestId"
                                className="form-control input-sm"
                                placeholder="Request Id"
                                // testname={testname}
                                // onChange={handlechange}
                            />
                            <input
                                type="text"
                                name="acceptedCompaniesId"
                                id="acceptedCompaniesId"
                                className="form-control input-sm"
                                placeholder="Companies Id"
                                // patientadress={patientadress}
                                // onChange={handlechange}
                            />
                        </form>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="button">Add a Test</button>
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
export default AddAcceptedTestForm

// Add Accepted
// Post request to https://moboclinic.herokuapp.com/api/addAccepted
// {
//   "requestId": 21,
//   "acceptedCompaniesId": 1
// }
