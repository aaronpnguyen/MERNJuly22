import React, {useEffect, useState} from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    let [info, setInfo] = useState({})
    let [errors, setErrors] = useState({})
    let [notFound, setNotFound] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()
    
    const changeHandler = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(response => {
            console.log(response)
            if (response.data.name !== "CastError") {
                setInfo(response.data)
            } else {
                setNotFound(true)
            }
        })
        .catch(error => console.log(error))
    }, [])

    const submitHandler = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/author/update/${id}`, info)
        .then(response => {
            console.log(response)
            console.log(response.data.errors)
            if (response.data.errors) {
                setErrors(response.data.errors)
            } else {
                setErrors({})
                navigate("/")
            }
        })
        .catch(error => {console.log(error)})
    }

    return (
        <div>
            {notFound?
                <>
                    <h1>We're sorry, but we could not find the author you are looking for.</h1>
                    <h1>Would you like to add this author to our database?</h1>
                    <button onClick={e => navigate("/new")}>Create an Author!</button>
                </>:
                <>
                    <Link to="/"><h2>Home</h2></Link>
                    <h3>Edit this author</h3>
                    <form onSubmit={submitHandler}>
                        {<h2 style={{color: "red"}}>{errors.name?.message}</h2>}
                        <label>Name: </label>
                        <br></br>
                        <input type="text" value={info.name} name="name" onChange={changeHandler}></input>
                        <br></br>
                        <button onClick={e => navigate("/")}>Cancel</button><input type="submit"></input>
                    </form>
                </>
            }
        </div>
    )
}

export default Edit 