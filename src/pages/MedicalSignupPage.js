import React, { useState } from 'react'

import MedicalSignupForm from '../components/MedicalSignup/MedicalSignupForm'

const MedicalSignupPage = () => {
    const [formState, setFormState] = useState({})

    const handleChange = event => {
        const { name, value } = event.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const { name, address, email, phone, password, password_confirmation } = formState

    console.log('name', name)
    console.log('address', address)
    console.log('email', email)
    console.log('phone', phone)
    console.log('password', password)
    console.log('password_confirmation', password_confirmation)

    const onSubmitForm = e => {
        e.preventDefault()
        try {
            const body = { name, address, email, phone, password }
            const response = fetch('http://moboclinic.herokuapp.com/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            window.location = '/'
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <MedicalSignupForm
            handleChange={handleChange}
            onSubmitForm={onSubmitForm}
            companyname={name}
            address={address}
            companyemail={email}
            phonenumber={phone}
            password={password}
            passwordconfirmation={password_confirmation}
        />
    )
}

export default MedicalSignupPage
