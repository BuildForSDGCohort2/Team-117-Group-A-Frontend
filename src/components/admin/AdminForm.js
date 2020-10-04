import React from 'react'
import AddATestForm from '../customerComponents/AddATestForm'

import './AdminForm.css'

const AdminForm = () => {
    return (
        <div className="container">
            <div className="d-flex flex-row">
                <AddATestForm />
            </div>
        </div>
    )
}

export default AdminForm
