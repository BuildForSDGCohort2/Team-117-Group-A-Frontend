import React from 'react'
import AddATestForm from '../customerComponents/AddATestForm'

import './AdminForm.css'

const AdminForm = () => {
    return (
        <div className="container">
            <div className="d-flex flex-row">
                <AddATestForm />
                <p className="button">Update Request for test</p>
                <p className="button">Delete Request for test</p>
            </div>
        </div>
    )
}

export default AdminForm
