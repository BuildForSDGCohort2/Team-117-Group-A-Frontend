import React, { useState, useEffect } from 'react'

import GetAllResultsForm from '../../medicalComponents/allResults/GetAllResultsForm'

const GetAllResultsCon = () => {
    const [allResults, setAllResults] = useState([])

    const deleteResult = async id => {
        try {
            const deleteResult = await fetch(`https://moboclinic.herokuapp.com/api/result/${id}`, {
                method: 'DELETE',
            })
            setAllResults(allResults.filter(data => data.id !== id))
            return deleteResult
        } catch (err) {
            console.error(err.message)
        }
    }

    const ListOfResults = async () => {
        try {
            const response = await fetch('https://moboclinic.herokuapp.com/api/results')
            const jsonData = await response.json()
            setAllResults(jsonData.data)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        ListOfResults()
    }, [])
    return (
        <div>
            <GetAllResultsForm allresults={allResults} deleteResult={deleteResult} />
        </div>
    )
}
export default GetAllResultsCon
