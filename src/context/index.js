import React, { createContext, useState } from 'react'

import { login } from '../services/auth'

const AppContext = createContext()

const AppProvider = props => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const handleLogin = async (username, password) => {
        const userData = await login(username, password)
        setLoading(false)

        if (userData?.id) {
            localStorage.setItem('user', JSON.stringify(userData))
        } else {
            setError('Error Signing in')
            return
        }
    }

    const handleLogOut = () => {
        localStorage.removeItem('user')
    }

    return (
        <AppContext.Provider
            value={{
                error,
                handleLogin,
                handleLogOut,
                loading,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}
const AppConsumer = AppContext.Consumer
export { AppProvider, AppConsumer, AppContext }
