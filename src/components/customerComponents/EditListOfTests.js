import React, { useState } from 'react'

const EditListOfTests = ({ testList }) => {
    const [description, SetDescription] = useState(testList[0].description)
    const [testName, SetTestName] = useState(testList[0].testName)
    const [price, SetPrice] = useState(testList[0].price)
    console.log('price', price)

    // Edit description function
    const updateDescription = async e => {
        e.preventDefault()
        try {
            const body = { testName, price, description }
            const response = await fetch(`http://localhost:5000/todos/${testList[0].id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            window.location = '/'
            return response
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${testList[0].id}`}>
                Edit
            </button>

            <div
                className="modal"
                id={`id${testList[0].id}`}
                onClick={() => {
                    SetTestName(testList[0].testName)
                    SetPrice(testList[0].price)
                    SetDescription(testList[0].description)
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
                                    SetTestName(testList[0].testName)
                                    SetPrice(testList[0].price)
                                    SetDescription(testList[0].description)
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
                                value={testList[0].testName}
                                onChange={e => SetTestName(e.target.value)}
                            />
                            <p>Price</p>
                            <input
                                type="text"
                                className="form-control"
                                value={testList[0].price}
                                onChange={e => SetPrice(e.target.value)}
                            />
                            <p>Description</p>
                            <input
                                type="text"
                                className="form-control"
                                value={testList[0].description}
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
                                    SetTestName(testList[0].testName)
                                    SetPrice(testList[0].price)
                                    SetDescription(testList[0].description)
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
