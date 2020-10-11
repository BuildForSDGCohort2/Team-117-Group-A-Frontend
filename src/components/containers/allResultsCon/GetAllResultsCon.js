import React, { useState, useEffect } from 'react'

import GetAllResultsForm from '../../medicalComponents/allResults/GetAllResultsForm'

const GetAllResultsCon = () => {
    const [allResults, setAllResults] = useState([])

    const ListOfResults = async () => {
        try {
            const response = await fetch('https://moboclinic.herokuapp.com/api/results')
            const jsonData = await response.json()
            setAllResults(jsonData.data)
        } catch (err) {
            console.error(err.message)
        }
    }
    console.log('results', allResults)
    useEffect(() => {
        ListOfResults()
    }, [])
    return (
        <div>
            <GetAllResultsForm />
        </div>
    )
}
export default GetAllResultsCon
