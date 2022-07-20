import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Dashboard = () => {
    let [authors, setAuthors] = useState([])
    let [update, setUpdate] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(response => {
                console.log(response.data)
                setAuthors(response.data)
            })
            .catch(error => console.log(error))
    }, [update])
    
    const deleteAuthor = id => {
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
            .then(response => {
                console.log(response)
                setUpdate(!update)
            })
            .catch(error => console.log(error))
    }

    return(
        <div>
            <Link to="/new">Add an author</Link>
            <h3>We have quotes by:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map(author => {
                            return (
                                <tr key={author._id}>
                                    <td>{author.name}</td>
                                    <td>
                                        <button onClick={e => navigate(`/edit/${author._id}`)}>Edit</button>
                                        <button onClick={e => deleteAuthor(author._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard