import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import moment from 'moment'

const AllNinjas = props => {
    let [ninjas, setNinjas] = useState([])
    let [update, setUpdate] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/ninjas")
        .then(response => {
            console.log(response.data)
            setNinjas(response.data.results)
        })
        .catch(error => console.log(error))
    }, [update, props.submit])

    const deleteNinja = id => {
        axios.delete(`http://localhost:8000/api/ninjas/${id}`)
            .then(response => {
                console.log(response)
                setUpdate(!update)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h3>All ninjas below</h3>
            {
                ninjas.map(ninja => {
                    return (
                        <div key={ninja._id}>
                            <h1><Link to={`/ninjas/${ninja._id}`}>{ninja.name}</Link></h1>
                            <h3>Number of Projects: {ninja.numProjects}</h3>
                            <h3>Grad date: {moment(ninja.graduationDate).format('MMMM Do, YYYY')}</h3>
                            <img src={ninja.imgUrl} alt={ninja.name} height="200px" width="200px"></img>
                            <br></br>
                            <Link to={`/ninjas/edit/${ninja._id}`}>Edit {ninja.name}</Link>
                            <button onClick={e => deleteNinja(ninja._id)}>Delete {ninja.name}</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default AllNinjas