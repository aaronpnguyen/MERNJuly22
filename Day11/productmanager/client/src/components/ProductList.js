import axios from 'axios';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const ProductList = props => {
    const {deleteOne} = props;
    const navigate = useNavigate()

    const deleteProduct = id => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(response => deleteOne(id))
            .catch(error => console.log(error))
        navigate(`/products`)
    }

    return (
        <div>
            <h1>All Products:</h1>
            {props.productList.map((product, i) =>
                <>
                    <h3 key={i}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        <button onClick={e => {deleteProduct(product._id)}}>Delete me!</button>
                    </h3>
                </>
            )}
        </div>
    )
}
export default ProductList