import React from 'react';
import {useState,useCallback,useEffect} from 'react'
import ProductList from './components/Product/ProductList'
import './App.css';
import AddProduct from './components/Product/AddProduct';
function App() {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  
  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://localhost:7158/api/products/');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const result = await response.json();
      const data = result.data
      console.log(data)
      setProducts(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  async function addProductHandler(product) {
    const response = await fetch('https://localhost:7158/api/products/',{
      method:'POST',
      body: JSON.stringify(product),
      headers:{
        'Content-Type':'application/json'
      }
    });
    const data = await response.json()
    console.log(data)
  }

  let content = <p>Found no movies.</p>;
  if (products.length > 0) {
    content = <ProductList products={products} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  

  return (
    <React.Fragment>
      <section>
        <AddProduct onAddProduct={addProductHandler}/>
      </section>
      <section>
        <button onClick={fetchProductsHandler}>Ürünleri Getir</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment> 
  );
}

export default App;
