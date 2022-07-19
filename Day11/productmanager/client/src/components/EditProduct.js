import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const EditProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(response => {
            setTitle(response.data.title)
            setPrice(response.data.price)
            setDescription(response.data.description)
        })
        .catch(error => console.log(error))
        // eslint-disable-next-line
    }, [])

    const onSubmit = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/update/${id}`, {title, price, description})
            .then(response => console.log(response))
            .catch(error => console.log(error))
        navigate(`/products/${id}`)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" onChange={e => setTitle(e.target.value)} value={title}></input>
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" onChange={e => setPrice(e.target.value)} value={price}></input>
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input type="text" onChange={e => setDescription(e.target.value)} value={description}></input>
                </div>
                <input type="submit" value="Update"></input>
            </form>
        </>
    )
}

export default EditProduct