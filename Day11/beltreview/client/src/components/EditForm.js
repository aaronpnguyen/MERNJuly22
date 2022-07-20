import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

const EditForm = () => {
    const [details, setDetails] = useState({})
    const [notFound, setNotFound] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()

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

    const changeHandler = e => {
        if (e.target.type === "checkbox") {
            setDetails({
                ...details,
                [e.target.name]: e.target.checked
            })
        } else {
            setDetails({
                ...details,
                [e.target.name]: e.target.value
            })
        }
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/ninjas/${id}`, details)
        .then(response => {
            console.log(response)
            navigate('/')
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={details.name} onChange={changeHandler}></input>
                </div>
                <div>
                    <label>Number of projects: </label>
                    <input type="number" name="numProjects" value={details.numProjects} onChange={changeHandler}></input>
                </div>
                <div>
                    <label>Image URL: </label>
                    <input type="text" name="imgUrl" value={details.imgUrl} onChange={changeHandler}></input>
                </div>
                <div>
                    <label>Graduation Date: </label>
                    <input type="date" name="graduationDate" value={moment(details.graduationDate).format("YYYY-MM-DD")} onChange={changeHandler}></input>
                </div>
                <div>
                    <label>Veteran? </label>
                    <input type="checkbox" name="isVeteran" checked={details.isVeteran} onChange={changeHandler}></input>
                </div>
                <input type="submit" value="Update"></input>
            </form>
        </div>
    )
}

export default EditForm