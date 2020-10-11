import React from 'react'

import AddResultsForm from '../../medicalComponents/allResults/AddResultsForm'

const AddResultsCon = () => {
    return (
        <div>
            <AddResultsForm />
        </div>
    )
}
export default AddResultsCon

// Add Result
// Post request to https://moboclinic.herokuapp.com/api/addResult
// {
// "requestId": "21",
// "testId": 31,
// "customerId": 31,
// "companiesId": 1,
// "result": "positive, you have malaria"
// }
