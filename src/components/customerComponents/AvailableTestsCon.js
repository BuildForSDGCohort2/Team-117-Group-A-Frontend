import React from 'react'
import CustomerNav from './CustomerNav/CustomerNav'
import { availableTests } from './availableTests'
import ListOfTests from './ListOfTests'

const AvailableTestsCon = () => {
    return (
        <div>
            <CustomerNav />
            <div className="d-flex justify-content-center">
                <h1>Price List of Available Test</h1>
            </div>
            {availableTests.map((user, i) => {
                return (
                    <ListOfTests
                        key={i}
                        testName={availableTests[i].testName}
                        price={availableTests[i].price}
                        description={availableTests[i].description}
                    />
                )
            })}
        </div>
    )
}

export default AvailableTestsCon
