import React from 'react'

const GetAllacceptedTestForm = () => {
    return (
        <div className="container-*">
            <div>
                <div className="moveRight">
                    <b>
                        <p>All Accepted Tests</p>
                    </b>
                    <table className="table mt-g text-center">
                        <thead>
                            <tr>
                                <th>Request By</th>
                                <th>Companies</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="id">
                                <td>Request By Customer Name</td>
                                <td>Companies Name</td>
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
export default GetAllacceptedTestForm

// "requestId": 21,
// "acceptedCompaniesId": 1
