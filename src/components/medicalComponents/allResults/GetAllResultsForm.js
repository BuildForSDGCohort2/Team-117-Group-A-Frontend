import React from 'react'

const GetAllResultsForm = () => {
    return (
        <div className="container-*">
            <div>
                <div className="moveRight">
                    <b>
                        <p>Get All Results Form</p>
                    </b>
                    <table className="table mt-g text-center">
                        <thead>
                            <tr>
                                <th>Request</th>
                                <th>Test</th>
                                <th>Customer</th>
                                <th>Companies</th>
                                <th>Result</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="id">
                                <th>requestId</th>
                                <th>testId</th>
                                <th>customerId</th>
                                <th>companiesId</th>
                                <th>result of the test</th>
                                <td>
                                    <button>Edit</button>
                                </td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                </div>
            </div>
        </div>
    )
}
export default GetAllResultsForm

// "requestId": "21",
// "testId": 31,
// "customerId": 31,
// "companiesId": 1,
// "result": "positive, you have malaria"
