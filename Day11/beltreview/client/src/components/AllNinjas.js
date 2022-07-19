import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AllNinjas = () => {
    let [ninjas, setNinjas] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/ninjas")
        .then(response => {
            console.log(response.data)
            setNinjas(response.data.results)
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h3>All ninjas below</h3>
            {
                ninjas.map(ninja => {
                    return (
                        <div key={ninja._id}>
                            <h1>{ninja.name}</h1>
                            <h3>Number of Projects: {ninja.numProjects}</h3>
                            <h3>Grad date: {ninja.graduationDate}</h3>
                            <img src={ninja.imgUrl} alt={ninja.name} height="200px" width="200px"></img>
                        </div>
                    )
                })
            }
        </>
    )
}

export default AllNinjas