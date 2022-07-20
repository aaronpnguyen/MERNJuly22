import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const OneNinja = () => {
    const [details, setDetails] = useState({})
    const [notFound, setNotFound] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
            .then(response => {
                if (response.data.results) {
                    setDetails(response.data.results)
                } else {
                    setNotFound(true)
                }
            })
            .catch(error => console.log(error))
    }, [])

    const deleteNinja = () => {
        axios.delete(`http://localhost:8000/api/ninjas/${id}`)
            .then(response => {
                console.log(response)
                navigate("/")
            })
            .catch(error => console.log(error))
    }

    return(
        <div>
            {notFound?<h1>Sorry this ninja does not exist</h1>:
                <>
                    <h1>Details about {details.name}</h1>
                    <h3>Graduation date: {details.graduationDate}</h3>
                    <h3>Number of Projects: {details.numProjects}</h3>
                    <h3>Veteran status: {details.isVeteran?"Is a veteran": "Not a veteran"}</h3>
                    <button onClick={deleteNinja}>Delete {details.name}</button>
                </>
            }
        </div>
    )
}

export default OneNinja