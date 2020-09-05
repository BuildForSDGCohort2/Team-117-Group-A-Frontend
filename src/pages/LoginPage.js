import React, { useContext, useState } from 'react'
import { AppContext } from '../context'

import LoginForm from '../components/LoginForm/LoginForm'
import HeaderBar from '../components/NavBar/NavBar'

const LoginPage = () => {
    const { currentUser, handleLogin, error } = useContext(AppContext)
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
        console.log(currentUser)
    }

    return (
        <div>
            <HeaderBar />
            <LoginForm
                handleChange={handleChange}
                onSubmitForm={onSubmitForm}
                username={username}
                password={password}
                error={error}
            />
        </div>
    )
}

export default LoginPage
