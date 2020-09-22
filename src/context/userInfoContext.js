import React from 'react'

const { Provider, Consumer } = React.createContext()

const userInfoContext = () => {
    return <Provider value={{ username, changeName: this.changeName }}>{this.props.children}</Provider>
}

export { userInfoContext, Consumer as UserInfoContextConsumer }

// All the api end point to update users info

// Add Test
// Post request to https://moboclinic.herokuapp.com/api/addTest
// {
//   "testName": "Typhoid",
//   "price": "4000",
//   "description": "A test for Typhoid"
// }

// Get Tests
// Get request to https://moboclinic.herokuapp.com/api/tests

// Update Test
// Put request to https://moboclinic.herokuapp.com/api/test/11  where 11 is the id number of the test to be updated

// {
//   "testName": "Typhoid",
//   "price": "4000",
//   "description": "A test for Typhoid"
// }

// Delete Test
// Delete request to https://moboclinic.herokuapp.com/api/test/1 where 1 is the id of the test to be deleted

// Add Request
// Post request to https://moboclinic.herokuapp.com/api/addRequest

// {
//   "testId": 31,
//   "customerId": 31,
//   "address": "55 Avenue"
// }

// Get Requests for test
// Get request to https://moboclinic.herokuapp.com/api/requests

// Update Request for test
// Put request to https://moboclinic.herokuapp.com/api/request/11 where 11 is the id of the request to be updated

// {
//   "testId": 31,
//   "customerId": 31,
//   "address": "50 Agege"
// }

// Delete Request for test
// Delete request to https://moboclinic.herokuapp.com/api/request/11 where 11 is the id of the request to be deleted
