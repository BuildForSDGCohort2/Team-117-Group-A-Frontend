import React, { useState, useEffect } from 'react'

import CustomerNav from './CustomerNav/CustomerNav'
import NavBar from '../NavBar/NavBar'
import EditListOfTests from './EditListOfTests'
import './ListOfTests.css'

const ListOfTests = () => {
    const [testList, setTestList] = useState([])
    //Delete todo function
    // const deleteTestsa = async (id) => {
    //   try {
    //     const deleteTestsa = await fetch(`https://moboclinic.herokuapp.com/api/test/${id}`, {
    //       method: "DELETE"
    //     });
    //     return setTestList(setTestList.filter(data => data.id !== id))
    //   } catch (err) {
    //     console.error(err.message);
    //   }
    //   return deleteTestsa
    // }

    //get the list of tests
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
                                    <td>{data.testName}</td>
                                    <td>{data.price}</td>
                                    <td>{data.description}</td>
                                    <td>
                                        <EditListOfTests testList={testList} />
                                    </td>
                                    <td>
                                        <button>Delete</button>
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
