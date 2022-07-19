import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from "react-router-dom"
import axios from 'axios'

const OneProduct = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(response => {
            setProduct(response.data)
        })
        .catch(error => console.log(error))
        // eslint-disable-next-line
    }, [])

    const deleteProduct = e => {
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        navigate("/products")
    }

    const editProduct = e => {
        e.preventDefault()
        navigate(`/products/edit/${id}`)
    }

    return (
        <div>
                <h3>Title: {product.title}</h3>
                <h3>Price: ${product.price}</h3>
                <h3>Description: {product.description}</h3>
                <input type="submit" value="Delete" onClick={deleteProduct}></input>
                <input type="submit" value="Edit" onClick={editProduct}></input>
        </div>
    )
}

export default OneProduct