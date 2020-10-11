import React, { useState } from 'react'

import { getUserFromLocalStorage } from '../../../utils'

import AddResultsForm from '../../medicalComponents/allResults/AddResultsForm'

const AddResultsCon = () => {
    const [formState, setFormState] = useState({})
    const userId = getUserFromLocalStorage().id

    const { requestId, testId, customerId, companiesId, result } = formState

    //handel change of input for the form
    const handleChange = event => {
        const { name, value } = event.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }
    console.log('formState', formState)
    console.log('userId', userId)

    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const body = { requestId, testId, customerId, companiesId, result }
            await fetch('https://moboclinic.herokuapp.com/api/addResult', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            window.location = '/medical-dashboard/addresultscon'
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div>
            <AddResultsForm
                handlechange={handleChange}
                onsubmitform={onSubmitForm}
                requestid={requestId}
                testid={testId}
                customerid={customerId}
                companiesid={companiesId}
                result={result}
            />
        </div>
    )
}
export default AddResultsCon
