import React, { useState } from 'react'

import RequestATestForm from '../components/customerComponents/RequestATestForm'
import HeaderBar from '../components/NavBar/NavBar'
import { getUserFromLocalStorage } from '../utils/index'

const RequestATestPage = () => {
    // Form state
    const [formState, setFormState] = useState({})
    const userId = getUserFromLocalStorage().id

    const { testId, customerId, address } = formState

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
            const body = { customerId, testId, address }
            await fetch('https://moboclinic.herokuapp.com/api/addRequest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            window.location = '/RequestATestPage'
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div>
            <HeaderBar />
            <RequestATestForm
                handlechange={handleChange}
                onsubmitform={onSubmitForm}
                address={address}
                testid={testId}
                userid={userId}
                customerid={customerId}
            />
        </div>
    )
}

export default RequestATestPage

// Add Request
// Post request to https://moboclinic.herokuapp.com/api/addRequest

// {
// "testId": 31,
// "customerId": 31,
// "address": "55 Avenue"
// }
