import React, { createContext } from 'react'
import { login } from '../services/auth'

const AppContext = createContext()

const AppProvider = props => {
    const handleLogin = async (username, password) => {
        const userData = await login(username, password)
        localStorage.setItem('user', JSON.stringify(userData))
    }

    return (
        <AppContext.Provider
            value={{
                handleLogin,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}
const AppConsumer = AppContext.Consumer
export { AppProvider, AppConsumer, AppContext }
