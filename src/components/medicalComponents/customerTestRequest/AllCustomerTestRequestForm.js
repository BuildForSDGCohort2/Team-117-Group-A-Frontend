import React, { useState, useEffect } from 'react'

const AllCustomerTestRequestForm = () => {
    const [testReqList, setTestReqList] = useState([])

    //Delete a test function
    const deleteReqTest = async id => {
        try {
            const deleteReqTest = await fetch(`https://moboclinic.herokuapp.com/api/request/${id}`, {
                method: 'DELETE',
            })
            setTestReqList(testReqList.filter(data => data.id !== id))
            return deleteReqTest
        } catch (err) {
            console.error(err.message)
        }
    }

    const ListOfReqTestsa = async () => {
        try {
            const response = await fetch('https://moboclinic.herokuapp.com/api/requests')
            const jsonData = await response.json()
            setTestReqList(jsonData.data)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        ListOfReqTestsa()
    }, [])

    console.log('testReqList', testReqList)

    return (
        <div className="container-*">
            <div>
                <div className="moveRight">
                    <b>
                        <p>All Requested Tests</p>
                    </b>
                    <table className="table mt-g text-center">
                        <thead>
                            <tr>
                                <th>Test Id</th>
                                <th>Customer Id</th>
                                <th>Address</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testReqList.map(data => (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.testId}</td>
                                    <td>{data.customerId}</td>
                                    <td>{data.address}</td>
                                    {/* <td>
                    <EditListOfTests testList={testList[0]} />
                  </td> */}
                                    <td>
                                        <button onClick={() => deleteReqTest(data.id)}>Delete</button>
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
export default AllCustomerTestRequestForm

// {
//   "testId": 31,
//   "customerId": 31,
//   "address": "55 Avenue"
// }
