import React, { useState } from 'react'

import SignupForm from '../components/SignupForm/SignupForm'

const SignUpPage = () => {
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
    const { first_name, last_name, email, phone, password, password_confirmation } = formState

    const onSubmitForm = e => {
        e.preventDefault()
        try {
            const body = { first_name, last_name, email, phone, password }
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
        <div>
            <SignupForm
                handleChange={handleChange}
                onSubmitForm={onSubmitForm}
                firstname={first_name}
                lastname={last_name}
                email={email}
                phone={phone}
                password={password}
                passwordconfirmation={password_confirmation}
            />
        </div>
    )
}

export default SignUpPage
