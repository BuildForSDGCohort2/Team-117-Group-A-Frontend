import React, { useState } from 'react'

import RequestATestForm from '../components/customerComponents/RequestATestForm'
import HeaderBar from '../components/NavBar/NavBar'

const RequestATestPage = () => {
    // Form state
    const [formState, setFormState] = useState({})

    //handel change of input for the form
    const handleChange = event => {
        const { name, value } = event.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const { testId, test_name, patient_adress } = formState

    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const body = { testId, test_name, patient_adress }
            await fetch('https://moboclinic.herokuapp.com/api/addRequest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            window.location = '/'
        } catch (err) {
            console.error(err.message)
        }
    }
    console.log('formState', formState)
    return (
        <div>
            <HeaderBar />
            <RequestATestForm
                handlechange={handleChange}
                onsubmitform={onSubmitForm}
                patientadress={patient_adress}
                testname={test_name}
            />
        </div>
    )
}

export default RequestATestPage
