import React from 'react'
import { useState } from 'react'
import Button from "@mui/material/Button";

const EditForm = (props) => {
    const {editProduct} = props
    const {onUpdate}= props
const [name, setName] = useState(editProduct.name)
const [image, setImage] = useState(editProduct.image)
const [price, setPrice] = useState(editProduct.price)

const handleSubmitForm = async(e) => {
    e.preventDefault();
    const updateProduct = {name, image, price}

    const res = await fetch(`https://64a7da98dca581464b84e4d7.mockapi.io/Products/${editProduct.id}`, {
        method: 'PUT',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(updateProduct)
    })
    await onUpdate()
}

  return (
    <>
    <p>EditForm</p>
    <form onSubmit={handleSubmitForm}>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type='text' value={image} onChange={(e) => setImage(e.target.value)}/>
        <input type='text' value={price} onChange={(e) => setPrice(e.target.value)}/>
        <Button variant="contained" type='submit'>Update product</Button>
    </form>
    </>
  )
}

export default EditForm