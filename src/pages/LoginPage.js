import React, { useState } from 'react'

import LoginForm from '../components/LoginForm/LoginForm'

const LoginPage = () => {
    const [formState, setFormState] = useState({})

    const handleChange = event => {
        const { name, value } = event.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const body = { email, password }
            const response = await fetch('http://moboclinic.herokuapp.com/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            console.log(response)
        } catch (err) {
            console.error(err.message)
        }
    }
    const { email, password } = formState
    return (
        <div>
            <LoginForm handleChange={handleChange} onSubmitForm={onSubmitForm} email={email} password={password} />
        </div>
    )
}

export default LoginPage
