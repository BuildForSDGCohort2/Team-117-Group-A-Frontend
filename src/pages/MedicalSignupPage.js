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

    const { company_name, address, company_email, phone_number, password, password_confirmation } = formState

    return (
        <>
            <HeaderBar />
            <MedicalSignupForm
                handleChange={handleChange}
                companyname={company_name}
                address={address}
                companyemail={company_email}
                phonevumber={phone_number}
                password={password}
                passwordconfirmation={password_confirmation}
            />
        </>
    )
}

export default MedicalSignupPage
