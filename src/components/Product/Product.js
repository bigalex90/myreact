import React from 'react'
import classes from './Product.css'

function Product(props) {
    return ( 
        <li className={classes.movie}>
            <h2>{props.Name}</h2>
            <h5>{props.Description}</h5>
            <p>{props.Price}</p>
        </li>
    );
}

export default Product;