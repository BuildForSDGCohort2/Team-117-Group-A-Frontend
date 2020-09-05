import React, { useState } from 'react'

import MedicalSignupForm from '../components/MedicalSignup/MedicalSignupForm'
import HeaderBar from '../components/NavBar/NavBar'

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
            return response
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div>
            <HeaderBar />
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
        </div>
    )
}

export default MedicalSignupPage
