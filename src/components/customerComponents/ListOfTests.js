import React, { useState, useEffect } from 'react'

import CustomerNav from './CustomerNav/CustomerNav'
import NavBar from '../NavBar/NavBar'
import './ListOfTests.css'

const ListOfTests = () => {
    const [testList, setTestList] = useState([])

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
            {testList.map(data => {
                return (
                    <div key={data.id}>
                        <div className="d-flex justify-content-around">
                            <p>{data.testName}</p>
                            <p>Curency indicater:{data.price}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <p>{data.description}</p>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default ListOfTests
