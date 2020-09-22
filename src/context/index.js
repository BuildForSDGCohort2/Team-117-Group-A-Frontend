import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { login } from '../services/auth'

const AppContext = createContext()

const AppProvider = props => {
    const [error, setError] = useState('')
    const [currentUser, setCurrentUser] = useState({})

    let history = useHistory()
    const handleLogin = async (username, password) => {
        const userData = await login(username, password)

        if (userData?.id) {
            setCurrentUser(userData)
            return userData
        } else {
            setError('Error Signing in')
            return
        }
    }

    const handleLogOut = () => {
        console.log('loggedout')
        setCurrentUser(null)
        history.push('/')
    }

    return (
        <AppContext.Provider
            value={{
                error,
                handleLogin,
                handleLogOut,
                currentUser,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}
const AppConsumer = AppContext.Consumer
export { AppProvider, AppConsumer, AppContext }
