import React from 'react';
import {useState} from 'react'
import ProductList from './components/Product/ProductList'
import './App.css';
function App() {

  const [products, setProducts] = useState([])
  function fetchProductsHandler() {
    fetch('https://localhost:7158/api/products/').then(response=>{
      return response.json()
    }).then(result=>{
      setProducts(result.data)
      console.log(result.data)
    })
    
  }
  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchProductsHandler}>Ürünleri Getir</button>
      </section>
      <section>
        <ProductList products={products}/>
      </section>
    </React.Fragment> 
  );
}

export default App;
