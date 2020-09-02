import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import LoginForm from '../components/LoginForm/LoginForm'

const LoginPage = () => {
    const [formState, setFormState] = useState({})
    const [error, setError] = useState('')
    const history = useHistory()

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
            const { status } = response
            if (status >= 400) {
                setError('User not found')
            } else {
                history.push('/')
            }
        } catch (err) {
            setError('User not found')
            console.error(err.message)
        }
    }
    const { email, password } = formState
    return (
        <div>
            <LoginForm
                handleChange={handleChange}
                onSubmitForm={onSubmitForm}
                email={email}
                password={password}
                error={error}
            />
        </div>
    )
}

export default LoginPage
