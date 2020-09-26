import React from 'react'

import './AdminForm.css'

const AdminForm = () => {
    return (
        <div className="container">
            <div className="d-flex flex-row">
                <p className="button">Add a test</p>
                <p className="button">Delete a test</p>
                <p className="button">Update a Test</p>
                <p className="button">Update Request for test</p>
                <p className="button">Delete Request for test</p>
            </div>
        </div>
    )
}

export default AdminForm
