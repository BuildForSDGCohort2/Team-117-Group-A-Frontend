import React from 'react'
import './ListOfTests.css'

const ListOfTests = props => {
    return (
        <div className="container-*">
            <div className="section" id={props.key}>
                <div className="d-flex justify-content-around">
                    <p>{props.testName}</p>
                    <p>Curency indicater: {props.price}</p>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <p>{props.description}</p>
            </div>
            <hr />
        </div>
    )
}

export default ListOfTests
