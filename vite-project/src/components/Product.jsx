import React from 'react'
import Button from '@mui/material/Button';
import "./Product.css"

const Product = (props) => {
    const {product, onUpdate, onEdit}= props
    const {id, name, image, price} = product

    const deleteHandler = async() => {
      const res = await fetch(`https://64a7da98dca581464b84e4d7.mockapi.io/Products/${id}`, {method: 'DELETE'})
      const data = await res.json();
      console.log('data delete', data)
      await onUpdate()
    }
    const editHandler = () => {
      onEdit(product)
    }
    
  return (
    <div className='card-container'>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <p>price: {price}$</p>
        <div className='btn'>
        <Button  variant="contained" onClick={deleteHandler}>Delete</Button>
        <Button  variant="contained" onClick={editHandler}>Edit</Button>
        </div>

    </div>
  )
}

export default Product