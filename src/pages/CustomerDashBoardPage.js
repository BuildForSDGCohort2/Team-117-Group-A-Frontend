import React from 'react'
import CustomerDashBoardForm from '../components/customerComponents/CustomerDashBoardForm'
import HeaderBar from '../components/NavBar/NavBar'
import './index.css'

const CustomerDashBoardPage = () => {
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
