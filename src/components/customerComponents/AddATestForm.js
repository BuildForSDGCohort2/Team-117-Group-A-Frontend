import React, { useState } from 'react'

const AddATestForm = () => {
    const [description, setDescription] = useState('')
    const [testName, setTestName] = useState('')
    const [price, setPrice] = useState('')

    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const body = { testName, price, description }
            const response = fetch('http://localhost:5000/todos', {
                method: 'POST',
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
            <div class="container">
                {/* <!-- Button to Open the Modal --> */}
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    Add a test
                </button>

                {/* <!-- The Modal --> */}
                <div class="modal" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            {/* <!-- Modal Header --> */}
                            <div class="modal-header">
                                <h4 class="modal-title">Add a new test</h4>
                                <button type="button" class="close" data-dismiss="modal">
                                    &times;
                                </button>
                            </div>

                            {/* <!-- Modal body --> */}
                            <div class="modal-body">
                                <form onSubmit={onSubmitForm}>
                                    <p>Test name</p>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={description}
                                        onChange={e => setTestName(e.target.value)}
                                    />
                                    <p>Price</p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={description}
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
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">
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

/* 
      
    </div> */
