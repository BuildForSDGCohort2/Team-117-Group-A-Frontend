import React, { useState } from 'react'
import CustomerNav from './CustomerNav/CustomerNav'
import { availableTests } from './availableTests'
import ListOfTests from './ListOfTests'

const AvailableTestsCon = () => {
    const [displayTestInfo, setDisplayTestInfo] = useState(false)

    const display = id => {
        console.log('id', id)
        console.log('availableTests', availableTests)
        //map availabe test and sets state displyTestInfo to show/hide as per id received.

        setDisplayTestInfo(prevState => !displayTestInfo)
    }

    return (
        <div>
            <CustomerNav />
            <div className="d-flex justify-content-center">
                <h1>Price List of Available Test</h1>
            </div>
            {availableTests.map((user, i) => {
                return (
                    <ListOfTests
                        id={i}
                        testName={availableTests[i].testName}
                        price={availableTests[i].price}
                        description={availableTests[i].description}
                        displaydescription={displayTestInfo}
                        onchangedisplay={display}
                    />
                )
            })}
        </div>
    )
}

export default AvailableTestsCon
