import React, {useState, useEffect} from 'react';
import axios from 'axios'
import ProductList from './ProductList'

const Products = () => {
    let [info, setInfo] = useState({
        title: "",
        price: 0,
        description: ""
    });
    const [productList, setProductList] = useState([]);
    const [update, setUpdate] = useState(false);
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(response => {
            console.log(response.data)
            setProductList(response.data)
            setUpdate(true)
        })
        .catch(error => {
            console.log(error)
        })
    }, [update]);

    const changeHandler = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/product/new", {title, price, description})
        .then(response => {console.log(response.data)})
        .catch(error => {console.log(error)})
        setUpdate(!update)
        console.log(update)
    }

    const {title, price, description} = info;
    return(
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" onChange={changeHandler} name="title"></input>
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" onChange={changeHandler} name="price"></input>
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input type="text" onChange={changeHandler} name="description"></input>
                </div>
                <input type="submit" value="Create"></input>
            </form>
            {update && <ProductList productList={productList}/>}
        </>
    );
};

export default Products;