import React, { useState, useEffect } from 'react'

const GetAllacceptedTestForm = () => {
    const [testListAcc, setTestListAcc] = useState([])

    //Delete a test function
    const deleteTestAcc = async id => {
        try {
            const deleteTestAcc = await fetch(`https://moboclinic.herokuapp.com/api/accepted/${id}`, {
                method: 'DELETE',
            })
            setTestListAcc(testListAcc.filter(data => data.id !== id))
            return deleteTestAcc
        } catch (err) {
            console.error(err.message)
        }
    }

    const ListOfTestAcc = async () => {
        try {
            const response = await fetch('https://moboclinic.herokuapp.com/api/accepted')
            const jsonData = await response.json()
            setTestListAcc(jsonData.data)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        ListOfTestAcc()
    }, [])

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
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testListAcc.map(data => (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.requestId}</td>
                                    <td>{data.acceptedCompaniesId}</td>
                                    <td>
                                        <button onClick={() => deleteTestAcc(data.id)}>Delete</button>
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
export default GetAllacceptedTestForm

// "requestId": 21,
// "acceptedCompaniesId": 1
