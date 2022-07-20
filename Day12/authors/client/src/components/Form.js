import axios from 'axios'
import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'

const Form = () => {
    let [info, setInfo] = useState({})
    let [errors, setErrors] = useState({})

    const changeHandler = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate()

    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/author/new", info)
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
    
    return(
        <>
            <Link to="/">Home</Link>
            <h3>Add a new author:</h3>
            <form onSubmit={submitHandler}>
                {<h2 style={{color: "red"}}>{errors.name?.message}</h2>}
                <label>Name: </label>
                <br></br>
                <input type="text" placeholder="Name" name="name" onChange={changeHandler}></input>
                <br></br>
                <button onClick={e => navigate("/")}>Cancel</button><input type="submit"></input>
            </form>
        </>
    )
}

export default Form