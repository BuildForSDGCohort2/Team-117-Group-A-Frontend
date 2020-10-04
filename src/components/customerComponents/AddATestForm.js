import React, { useState } from 'react'

const AddATestForm = () => {
    const [testName, setTestName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const body = { testName, price, description }
            const response = await fetch('https://moboclinic.herokuapp.com/api/addTest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            window.location = '/AminPage'
            return response
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div>
            <div className="container">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    Add a test
                </button>

                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <h4 className="modal-title">Add a new test</h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    &times;
                                </button>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={onSubmitForm}>
                                    <p>Test name</p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={testName}
                                        onChange={e => setTestName(e.target.value)}
                                    />
                                    <p>Price</p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={price}
                                        onChange={e => setPrice(e.target.value)}
                                    />
                                    <p>Description</p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                    />
                                    <button className="btn btn-success">Add</button>
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">
                                        Close
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddATestForm
