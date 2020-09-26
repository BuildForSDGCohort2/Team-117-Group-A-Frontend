import React, { useContext, useState } from 'react'
import { AppContext } from '../context'
import { useHistory, useLocation } from 'react-router-dom'

import LoginForm from '../components/LoginForm/LoginForm'
import HeaderBar from '../components/NavBar/NavBar'
import './index.css'

const LoginPage = () => {
    const { handleLogin, error } = useContext(AppContext)
    const [formState, setFormState] = useState({ username: '', password: '' })
    let history = useHistory()
    let location = useLocation()

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
        let { from } = location.state || { from: { pathname: '/' } }
        await handleLogin(username, password)
        history.replace(from)
    }

    return (
        <>
            <HeaderBar />
            <div className="login-page">
                <LoginForm
                    handleChange={handleChange}
                    onSubmitForm={onSubmitForm}
                    username={username}
                    password={password}
                    error={error}
                />
            </div>
        </>
    )
}

export default LoginPage
