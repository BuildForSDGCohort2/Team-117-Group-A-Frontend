import React, { useState } from 'react'

const EditListOfTests = ({ testList }) => {
    const [description, SetDescription] = useState(testList.description)
    const [testName, SetTestName] = useState(testList.testName)
    const [price, SetPrice] = useState(testList.price)

    // Edit description function
    const updateDescription = async e => {
        e.preventDefault()
        try {
            const body = { testName, price, description }
            const response = await fetch(`https://moboclinic.herokuapp.com/api/test/${testList.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            window.location = '/ListOfTests'
            return response
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${testList.id}`}>
                Edit
            </button>

            <div
                className="modal"
                id={`id${testList.id}`}
                onClick={() => {
                    SetTestName(testList.testName)
                    SetPrice(testList.price)
                    SetDescription(testList.description)
                }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Test List Item</h4>

                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                onClick={() => {
                                    SetTestName(testList.testName)
                                    SetPrice(testList.price)
                                    SetDescription(testList.description)
                                }}
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            <p>Test Name</p>
                            <input
                                type="text"
                                className="form-control"
                                name="testName"
                                onChange={e => SetTestName(e.target.value)}
                            />
                            <p>Price</p>
                            <input
                                type="text"
                                className="form-control"
                                name="price"
                                onChange={e => SetPrice(e.target.value)}
                            />
                            <p>Description</p>
                            <input
                                type="text"
                                className="form-control"
                                name="description"
                                onChange={e => SetDescription(e.target.value)}
                            />
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updateDescription(e)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => {
                                    SetTestName(testList.testName)
                                    SetPrice(testList.price)
                                    SetDescription(testList.description)
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditListOfTests
