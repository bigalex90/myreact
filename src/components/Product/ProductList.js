import React from 'react'
import Product from './Product'
import classes from './ProductList.css'
function ProductList(props) {
    return ( 
        <ul className={classes['movies-list']}>
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