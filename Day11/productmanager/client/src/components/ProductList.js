import React from 'react';
import {Link} from 'react-router-dom'

const ProductList = props => {
    return (
        <div>
            <h1>All Products:</h1>
            {props.productList.map((product, i) =>
                <>
                    <h3 key={i}>{product.title}</h3>
                </>
            )}
        </div>
    )
}
export default ProductList