import React, { useContext, useState } from 'react'
import { AppContext } from '../context'

import LoginForm from '../components/LoginForm/LoginForm'

const LoginPage = () => {
    const { handleLogin } = useContext(AppContext)
    const [formState, setFormState] = useState({})

    const { email, password } = formState

    const handleChange = event => {
        const { name, value } = event.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const onSubmitForm = e => {
        e.preventDefault()
        handleLogin({ email, password })
    }

    return (
        <div>
            <LoginForm handleChange={handleChange} onSubmitForm={onSubmitForm} email={email} password={password} />
        </div>
    )
}

export default LoginPage
