import React from 'react'
import Product from './Product'
import './ProductList.css'
function ProductList(props) {
    return ( 
        <ul className='movies-list'>
            {props.products.map((product) =>(
                <Product
                key={product.productId}
                Name = {product.productName}
                Description = {product.productDescription}
                Price = {product.unitPrice}
                />              
            ))}
        </ul>
    );
}

export default ProductList;