import React from 'react'
import './ListOfTests.css'

const ListOfTests = props => {
    const { testName, price, description, onchangedisplay, displaydescription, id } = props
    // console.log("props", props)
    return (
        <div className="container-*">
            <div className="section">
                <div className="d-flex justify-content-around">
                    <p>{testName}</p>
                    <p>Curency indicater: {price}</p>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <p key={id} onClick={() => onchangedisplay(id)}>
                    See more info{displaydescription ? description : null}
                </p>
            </div>
            <hr />
        </div>
    )
}

export default ListOfTests
