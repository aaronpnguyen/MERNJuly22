import React, {useState} from 'react';
import axios from 'axios'

const Form = () => {
    let [info, setInfo] = useState({})
    let [errors, setErrors] = useState({})
    
    const changeHandler = e => {
        if(e.target.type === "checkbox") {
            setInfo({
                ...info,
                [e.target.name]: e.target.checked
            })
        } else {
            setInfo({
                ...info,
                [e.target.name]: e.target.value
            })
        }
    }
    
    // When submitting a form incompletely -> response looks like this: response.data.errors
    // When submitting a complete form -> reoibse looks like this: resposne.data.results

    // If there are any errors, then save the errors to a state variable

    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/ninjas", info)
        .then(response => {
            console.log(response)
            if (response.data.errors) {
                setErrors(response.data.errors)
            } else {
                setErrors({})
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" onChange={changeHandler}></input>
                    {<h2 style={{color: "red"}}>{errors.name?.message}</h2>}
                </div>
                <div>
                    <label>Number of projects: </label>
                    <input type="number" name="numProjects" onChange={changeHandler}></input>
                    <h2 style={{color: "red"}}>{errors.numProjects?.message}</h2>
                </div>
                <div>
                    <label>Image URL: </label>
                    <input type="text" name="imgUrl" onChange={changeHandler}></input>
                    <h2 style={{color: "red"}}>{errors.imgUrl?.message}</h2>
                </div>
                <div>
                    <label>Graduation Date: </label>
                    <input type="date" name="graduationDate" onChange={changeHandler}></input>
                </div>
                <div>
                    <label>Veteran?: </label>
                    <input type="checkbox" name="isVeteran" onChange={changeHandler}></input>
                </div>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Form;