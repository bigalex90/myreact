
import React,{useRef} from 'react'
import './AddProduct.css';
const AddProduct = (props) => {
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const priceRef = useRef('')

    function submitHandler(event){
        event.preventDefault();

        const product = {
            productName : nameRef.current.value,
            productDescription : descriptionRef.current.value,
            unitPrice : priceRef.current.value
        }
        props.onAddProduct(product)
    }


  return (
    <form onSubmit={submitHandler}>
        <div className="control">
            <label htmlFor="title">Ürün Adı: </label>
            <input type="text" id='name' ref={nameRef}/>
        </div>
        <div className="control">
            <label htmlFor="description">Ürün Tanımı: </label>
            <textarea  id="description" cols="30" rows="5"ref={descriptionRef}></textarea>
        </div>
        <div className="control">
            <label htmlFor="price">Ürün Fiyatı: </label>
            <input type="text" id='price' ref={priceRef}/>
        </div>
        <button>Ürün Ekle</button>
    </form>
  )
}

export default AddProduct
