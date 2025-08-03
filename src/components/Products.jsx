import React, { useState } from 'react'

const Products = () => {
 const [products, setProducts] = useState([])

 const [price, setPrice] = useState("")
 const [descr, setDescr] = useState("")
 const [title, setTitle] = useState("")
 const [quantity, setQuantity] = useState("")

 const handlePriceChange = (e)=>{
    setPrice(e.target.value)
 }
 const handleDescrChange = (e)=>{
    setDescr(e.target.value)
 }
 const handleTitleChange = (e)=>{
    setTitle(e.target.value)
 }
 const handleQuantityChange = (e)=>{
    setQuantity(e.target.value)
 }

 const handleAddProduct = ()=>{

    const newProduct = {
        Price: price ,
        Descr: descr ,
        Title: title ,
        Quantity: quantity
    }
    setProducts(p=> [...p, newProduct])
 }
 const handleProductDelete =(index) =>{
setProducts(products.filter((_, i)=> i !== index))
 }
  return (
    <>
    
    <div>Products</div>
<div>
    <input type="number" onChange={(e)=>handlePriceChange(e)} placeholder='Price' />
    <input type="text" onChange={(e)=>handleDescrChange(e)} placeholder='Description' />
    <input type="text" onChange={(e)=>handleTitleChange(e)} placeholder='Title' />
    <input type="number" onChange={(e)=>handleQuantityChange(e)} placeholder='Quantity' />
<button className='mobile-button1' onClick={handleAddProduct}>Upload</button>
    <hr />
    <div>
        <p>Price: {price} </p>
        <p>Descr: {descr}</p>
        <p>Title: {title} </p>
        <p>Quantity: {quantity} </p>
    </div>
    <hr />
    <ul>
        {products.map((product, index)=>

            <li key={index} onClick={handleProductDelete(index)}> <b>{product.Price} {product.Title} {product.Descr} {product.Quantity}</b> </li>
        )}
    </ul>
</div>
    </>
  )
}

export default Products