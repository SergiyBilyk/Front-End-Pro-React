import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice';

const Product = ({product}) => {

    const dispatch  = useDispatch();

    const handleAddToCart = ()=> {
        dispatch(addToCart(product))
    }
   const {name, image, price, id} = product
  return (
    <div className='product'>
        <img src={image} alr={name} />
        <p>{name}<span>{price}</span></p>
        <button onClick={handleAddToCart}>Add to card</button>
    </div>
  )
}

export default Product