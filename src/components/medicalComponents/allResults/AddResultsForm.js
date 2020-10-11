import React from 'react'

const AddResultsForm = ({ requestid, testid, customerid, companiesid, result, handlechange, onsubmitform }) => {
    return (
        <div className="back">
            <div className="container-*">
                <div className="d-flex justify-content-center">
                    <h1>Add A Result</h1>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="row">
                        <form>
                            <input
                                type="text"
                                name="requestId"
                                id="requestId"
                                className="form-control input-sm"
                                placeholder="Requester's Id"
                                requestid={requestid}
                                onChange={handlechange}
                            />
                            <input
                                type="text"
                                name="testId"
                                id="testId"
                                className="form-control input-sm"
                                placeholder="Test Id"
                                testid={testid}
                                onChange={handlechange}
                            />
                            <input
                                type="text"
                                name="customerId"
                                id="customerId"
                                className="form-control input-sm"
                                placeholder="Customer Id"
                                customerid={customerid}
                                onChange={handlechange}
                            />
                            <input
                                type="text"
                                name="companiesId"
                                id="companiesId"
                                className="form-control input-sm"
                                placeholder="Companies Id"
                                companiesid={companiesid}
                                onChange={handlechange}
                            />
                            <input
                                type="text"
                                name="result"
                                id="result"
                                className="form-control input-sm"
                                placeholder="Result"
                                result={result}
                                onChange={handlechange}
                            />
                        </form>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <input type="submit" value="Request" className="btn-block button" onClick={onsubmitform} />
                </div>
                <div className="d-flex justify-content-center">
                    <b>
                        <p className="pspace">Note:</p>
                    </b>
                    <p className="pspace">You can only add one result at a time</p>
                </div>
            </div>
        </div>
    )
}
export default AddResultsForm
