import React, { useState } from 'react'
import CustomerNav from './CustomerNav/CustomerNav'
import { availableTests } from './availableTests'
import ListOfTests from './ListOfTests'

const AvailableTestsCon = () => {
    const [displayTestInfo, setDisplayTestInfo] = useState(false)

    const display = id => {
        console.log('id', id)
        setDisplayTestInfo(prevState => !displayTestInfo)
    }

    console.log('availableTests', availableTests[0].id)
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
