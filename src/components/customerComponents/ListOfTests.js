import React, { useState, useEffect } from 'react'

import CustomerNav from './CustomerNav/CustomerNav'
import NavBar from '../NavBar/NavBar'
import EditListOfTests from './EditListOfTests'
import './ListOfTests.css'

const ListOfTests = () => {
    const [testList, setTestList] = useState([])

    //Delete a test function
    const deleteTest = async id => {
        try {
            const deleteTest = await fetch(`https://moboclinic.herokuapp.com/api/test/${id}`, {
                method: 'DELETE',
            })
            setTestList(testList.filter(data => data.id !== id))
            return deleteTest
        } catch (err) {
            console.error(err.message)
        }
    }

    const ListOfTestsa = async () => {
        try {
            const response = await fetch('http://moboclinic.herokuapp.com/api/tests')
            const jsonData = await response.json()
            setTestList(jsonData.data)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        ListOfTestsa()
    }, [])

    return (
        <div className="container-*">
            <NavBar />
            <CustomerNav />
            <div>
                <div className="moveRight">
                    <table className="table mt-g text-center">
                        <thead>
                            <tr>
                                <th>
                                    Test
                                    <br />
                                    Number
                                </th>
                                <th>Test Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testList.map(data => (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.testName}</td>
                                    <td>{data.price}</td>
                                    <td>{data.description}</td>
                                    <td>
                                        <EditListOfTests testList={testList[0]} />
                                    </td>
                                    <td>
                                        <button onClick={() => deleteTest(data.id)}>Delete</button>
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

export default ListOfTests
