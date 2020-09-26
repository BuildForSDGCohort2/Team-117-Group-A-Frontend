import React from 'react'

import HeaderBar from '../components/NavBar/NavBar'
import { getUserFromLocalStorage } from '../utils'

import './index.css'
const TempHomePage = () => {
    const currentUser = getUserFromLocalStorage()

    return (
        <>
            <HeaderBar />
            <div className="page">
                <h3>Welcome {currentUser?.first_name.toUpperCase()}</h3>
            </div>
        </>
    )
}

export default TempHomePage
