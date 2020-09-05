import React, { useContext, useState } from 'react'
import { AppContext } from '../context'

import LoginForm from '../components/LoginForm/LoginForm'

const LoginPage = () => {
    const { handleLogin } = useContext(AppContext)
    const [formState, setFormState] = useState({ username: '', password: '' })

    const { username, password } = formState

    const handleChange = event => {
        const { name, value } = event.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const onSubmitForm = async e => {
        e.preventDefault()
        await handleLogin(username, password)
    }

    return (
        <div>
            <LoginForm
                handleChange={handleChange}
                onSubmitForm={onSubmitForm}
                username={username}
                password={password}
            />
        </div>
    )
}

export default LoginPage
