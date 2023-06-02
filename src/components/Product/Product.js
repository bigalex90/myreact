import React from 'react'
import './Product.css'

function Product(props) {
    return ( 
        <li className="movie">
            <h2>{props.Name}</h2>
            <h5>{props.Description}</h5>
            <p>{props.Price}</p>
        </li>
    );
}

export default Product;