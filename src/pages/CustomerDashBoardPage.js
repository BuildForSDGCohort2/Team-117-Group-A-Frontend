import React, { useContext } from 'react'
import CustomerDashBoardForm from '../components/customerComponents/CustomerDashBoardForm'
import { AppContext } from '../context'
import HeaderBar from '../components/NavBar/NavBar'
import './index.css'

const CustomerDashBoardPage = () => {
    const { currentUser } = useContext(AppContext)
    return (
        <div>
            <HeaderBar />
            <div className="page">
                <CustomerDashBoardForm />
            </div>
        </div>
    )
}

export default CustomerDashBoardPage
