import React from 'react'

const GetAllResultsForm = ({ allresults, deleteResult }) => {
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
                            {allresults.map(data => (
                                <tr key={data.id}>
                                    <td> {data.requestId}</td>
                                    <td>{data.testId}</td>
                                    <td>{data.customerId}</td>
                                    <td>{data.companiesId}</td>
                                    <td>{data.result}</td>
                                    <td>Edit</td>
                                    {/* <td>
                    <EditListOfTests testList={testList[0]} />
                  </td> */}
                                    <td>
                                        <button onClick={() => deleteResult(data.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
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
// requestid, testid, customerid, companiesid, result
