import React, { createContext, useState } from 'react'
import { login } from '../services/auth'

const AppContext = createContext()

const AppProvider = props => {
    const [currentUser, setCurrentUser] = useState({})

    const handleLogin = async ({ email, password }) => {
        const userData = await login({ email, password })
        console.log(userData)
        localStorage.setItem('user', userData)
        setCurrentUser(userData)
    }

    return (
        <AppContext.Provider
            value={{
                currentUser,
                handleLogin,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}
const AppConsumer = AppContext.Consumer
export { AppProvider, AppConsumer, AppContext }
