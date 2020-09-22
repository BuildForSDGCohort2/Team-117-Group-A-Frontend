import React, { createContext, useState } from 'react'
import { login, logOut } from '../services/auth'

const AppContext = createContext()

const AppProvider = props => {
    const [error, setError] = useState('')

    const handleLogin = async (username, password) => {
        const userData = await login(username, password)
        localStorage.setItem('user', JSON.stringify(userData))
        if (userData?.id) {
            window.location = '/'
        } else {
            setError('Error Signing in')
            return
        }
    }

    const handleLogOut = () => {
        logOut()
        window.location = '/login'
    }

    return (
        <AppContext.Provider
            value={{
                error,
                handleLogin,
                handleLogOut,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}
const AppConsumer = AppContext.Consumer
export { AppProvider, AppConsumer, AppContext }
