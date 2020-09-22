import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { login } from '../services/auth'

const AppContext = createContext()

const AppProvider = props => {
    const [error, setError] = useState('')
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    let history = useHistory()
    const handleLogin = async (username, password) => {
        const userData = await login(username, password)
        console.log(userData)
        if (userData?.id) {
            setCurrentUser(userData)
            setLoading(false)
            return userData
        } else {
            setError('Error Signing in')
            setLoading(false)
            return
        }
    }

    const handleLogOut = () => {
        setCurrentUser(null)
        history.push('/login')
    }

    return (
        <AppContext.Provider
            value={{
                error,
                handleLogin,
                handleLogOut,
                currentUser,
                loading,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}
const AppConsumer = AppContext.Consumer
export { AppProvider, AppConsumer, AppContext }
