import React, { useContext } from 'react'
import { AppContext } from '../context'

import HeaderBar from '../components/NavBar/NavBar'
import './index.css'

const TempHomePage = () => {
    const { currentUser } = useContext(AppContext)
    return (
        <>
            <HeaderBar />
            <div className="page">
                <h1>Temp Home Page</h1>
            </div>
        </>
    )
}

export default TempHomePage
